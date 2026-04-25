import { supabase } from "./supabase";

const sortMap = {
  "price-asc": {
    column: "price",
    ascending: true,
  },
  "price-desc": {
    column: "price",
    ascending: false,
  },
  "delta-e-asc": {
    column: "delta_e_avg",
    ascending: true,
  },
  latest: {
    column: "created_at",
    ascending: false,
  },
};

export const monitorCardFields = `
    id,
    slug,
    model,
    brand,
    thumbnail_url,
    size,
    panel,
    resolution_w,
    resolution_h,
    refresh_rate,
    delta_e_avg,
    srgb,
    dci_p3,
    adobe_rgb,
    price,
    data_source`;

export async function getMonitors(params = {}) {
  const {
    sort,
    brand,
    panelType,
    resolution,
    refreshRate,
    useCase,
    colorAccuracyTier,
    priceRange,
    deltaE,
    srgb,
    dciP3,
    q,
  } = params;

  const sortConfig = sortMap[sort] ?? sortMap["latest"];

  let query = supabase.from("monitors").select(monitorCardFields);

  if (brand) {
    const brands = brand.split(",");
    query = query.or(brands.map((b) => `brand.ilike.${b}`).join(","));
  }

  if (panelType) {
    const panels = panelType.split(",");
    query = query.or(panels.map((p) => `panel.ilike.${p}`).join(","));
  }

  if (resolution) {
    const resolutions = resolution.split(",");
    query = query.or(
      resolutions.map((r) => `resolution_label.ilike.${r}`).join(","),
    );
  }

  if (refreshRate) {
    const rates = refreshRate.split(",");
    const exact = rates.filter((r) => r !== "240");
    const hasPlus = rates.includes("240");

    const conditions = [
      ...exact.map((r) => `refresh_rate.eq.${r}`),
      ...(hasPlus ? ["refresh_rate.gte.240"] : []),
    ];

    query = query.or(conditions.join(","));
  }

  if (useCase) {
    const cases = useCase.split(",");
    query = query.overlaps("use_cases", cases);
  }

  if (colorAccuracyTier) {
    const sources = colorAccuracyTier.split(",");
    query = query.or(sources.map((s) => `data_source.ilike.${s}`).join(","));
  }

  if (priceRange) {
    const [min, max] = priceRange.split(",").map(Number);
    query = query.gte("price", min).lte("price", max);
  }

  if (deltaE) {
    const [max] = deltaE.split(",").map(Number);
    query = query.lte("delta_e_avg", max);
  }

  if (srgb) {
    const [min] = srgb.split(",").map(Number);
    query = query.gte("srgb", min);
  }

  if (dciP3) {
    const [min] = dciP3.split(",").map(Number);
    query = query.gte("dci_p3", min);
  }

  if (q) {
    query = query.or(`brand.ilike.%${q}%,model.ilike.%${q}%`);
  }

  return await query.order(sortConfig.column, {
    ascending: sortConfig.ascending,
  });
}

export async function getMonitorBySlug(slug) {
  return await supabase.from("monitors").select("*").eq("slug", slug).single();
}

export async function getSimilarMonitors(monitor) {
  const { id, use_cases, price } = monitor;

  const { data, error } = await supabase
    .from("monitors")
    .select(monitorCardFields)
    .overlaps("use_cases", use_cases)
    .gte("price", price * 0.7)
    .lte("price", price * 1.3)
    .neq("id", id)
    .limit(4);

  if (error) return { data: null, error };

  if (data.length < 2) {
    return await supabase
      .from("monitors")
      .select(monitorCardFields)
      .overlaps("use_cases", use_cases)
      .neq("id", id)
      .limit(4);
  }

  return { data, error };
}

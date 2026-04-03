import { supabase } from "./supabase";

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

export async function getMonitors() {
  return await supabase.from("monitors").select(monitorCardFields);
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

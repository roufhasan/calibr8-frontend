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
    price,
    data_source`;

export async function getMonitors() {
  const { data, error } = await supabase
    .from("monitors")
    .select(monitorCardFields);
  return { data, error };
}

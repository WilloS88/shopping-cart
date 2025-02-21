import { supabase } from "./supabaseClient";

export const getPublicImageUrl = (path: string): string => {
  const { data } = supabase.storage.from('product-images').getPublicUrl(path.replace('product-images/', ''));
  return data.publicUrl;
};

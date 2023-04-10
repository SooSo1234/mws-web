import { createClient } from '@supabase/supabase-js';

const metaverseSupabaseUrl = process.env.NEXT_PUBLIC_METAV_AUTH_SUPABASE_URL;
const metaverseSupabaseKey = process.env.NEXT_PUBLIC_METAV_AUTH_SUPABASE_ANON_KEY;

const webSupabaseUrl = process.env.NEXT_PUBLIC_WEB_SUPABASE_URL;
const webSupabaseKey = process.env.NEXT_PUBLIC_WEB_SUPABASE_ANON_KEY;

if (!metaverseSupabaseUrl || !metaverseSupabaseKey || !webSupabaseUrl || !webSupabaseKey) {
  throw new Error('Missing Supabase configuration.');
}

export const metaverseSupabase = createClient(metaverseSupabaseUrl, metaverseSupabaseKey);
export const webSupabase = createClient(webSupabaseUrl, webSupabaseKey);

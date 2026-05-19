// src/lib/supabase.js
// Supabase client for the frontend. Uses the anon key — safe to expose.
// RLS policies protect data.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Surface misconfiguration loudly during development.
  // In production this will appear in the browser console.
  // eslint-disable-next-line no-console
  console.error(
    "Missing Supabase env vars. Make sure REACT_APP_SUPABASE_URL and " +
      "REACT_APP_SUPABASE_ANON_KEY are set in .env.local and in Vercel."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true, // important for magic link callback
  },
});

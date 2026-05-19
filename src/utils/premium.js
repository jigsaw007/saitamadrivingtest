// src/utils/premium.js
// Legacy helper kept for compatibility, now backed by Supabase.
// Prefer using `useAuth()` from src/hooks/useAuth.js in new code.

import { supabase } from "../lib/supabase";

// Async version — for places that can await.
export async function isPremiumUserAsync() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return false;

  const { data, error } = await supabase
    .from("profiles")
    .select("is_premium")
    .eq("id", session.user.id)
    .maybeSingle();

  if (error) {
    console.error("isPremiumUserAsync error:", error);
    return false;
  }
  return !!data?.is_premium;
}

// Synchronous legacy wrapper — returns false if called outside an authed session.
// Prefer useAuth() instead. Kept only so old call sites don't crash.
export function isPremiumUser() {
  // We can't do an async DB check synchronously, so we fall back to
  // checking whether there's a cached Supabase session in localStorage.
  // The real check happens via useAuth() in components.
  try {
    const keys = Object.keys(window.localStorage);
    const sbKey = keys.find((k) => k.startsWith("sb-") && k.endsWith("-auth-token"));
    if (!sbKey) return false;
    const raw = window.localStorage.getItem(sbKey);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return !!parsed?.user;
  } catch {
    return false;
  }
}

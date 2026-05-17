// Temporary MVP premium check.
// Replace this with Supabase/Firebase auth + your database premium flag later.
export function isPremiumUser() {
  return localStorage.getItem("isPremium") === "true";
}

// Developer helper for local testing only:
// localStorage.setItem("isPremium", "true")
// localStorage.removeItem("isPremium")

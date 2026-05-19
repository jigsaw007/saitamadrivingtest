// src/hooks/useAuth.js
// Single source of truth for "who is logged in" and "are they premium".
// Wrap your app in <AuthProvider> in App.js, then use useAuth() anywhere.

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext({
  user: null,
  isPremium: false,
  loading: true,
  signInWithEmail: async () => {},
  signOut: async () => {},
  refreshProfile: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (userId) => {
    if (!userId) {
      setIsPremium(false);
      return;
    }
    const { data, error } = await supabase
      .from("profiles")
      .select("is_premium")
      .eq("id", userId)
      .maybeSingle();
    if (error) {
      console.error("fetchProfile error:", error);
      setIsPremium(false);
      return;
    }
    setIsPremium(!!data?.is_premium);
  }, []);

  useEffect(() => {
    let mounted = true;

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      fetchProfile(currentUser?.id).finally(() => {
        if (mounted) setLoading(false);
      });
    });

    // Subscribe to auth changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        fetchProfile(currentUser?.id);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const signInWithEmail = useCallback(async (email) => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: redirectTo,
        // Allow new users to sign up via magic link.
        shouldCreateUser: true,
      },
    });
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsPremium(false);
  }, []);

  const refreshProfile = useCallback(async () => {
    await fetchProfile(user?.id);
  }, [user, fetchProfile]);

  const value = {
    user,
    isPremium,
    loading,
    signInWithEmail,
    signOut,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

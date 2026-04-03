"use server";

import { createSupabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

// Demo user ID used for all user-specific operations (bookmarks, sessions, companion author)
const DEMO_USER_ID = "demo-user-portfolio";

export const createCompanion = async (formData: CreateCompanion) => {
  const supabase = createSupabaseAdmin();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author: DEMO_USER_ID })
    .select();

  if (error || !data)
    throw new Error(error?.message || "Failed to create a companion");

  return data[0];
};

export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) => {
  try {
    const supabase = createSupabaseAdmin();

    let query = supabase.from("companions").select();
    if (subject && topic) {
      query = query
        .ilike("subject", `%${subject}%`)
        .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    } else if (subject) {
      query = query.ilike("subject", `%${subject}%`);
    } else if (topic) {
      query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: companions, error } = await query;

    if (error) {
      console.error("Failed to fetch companions:", error.message);
      return [];
    }

    return companions || [];
  } catch (err) {
    console.error("Error in getAllCompanions:", err);
    return [];
  }
};

export const getCompanion = async (id: string) => {
  const supabase = createSupabaseAdmin();

  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("id", id);

  if (error) {
    throw new Error(error.message || "Failed to fetch companion");
  }
  return data?.[0] || null;
};

export const addToSessionHistory = async (companionId: string) => {
  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase.from("session_history").insert({
      companion_id: companionId,
      user_id: DEMO_USER_ID,
    });
    if (error) console.error("Failed to record session:", error.message);
    return data;
  } catch (err) {
    console.error("Error in addToSessionHistory:", err);
  }
};

export const getRecentSessions = async (limit = 10) => {
  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("session_history")
      .select(`companions:companion_id (*)`)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Failed to fetch recent sessions:", error.message);
      return [];
    }

    return data.map(({ companions }) => companions);
  } catch (err) {
    console.error("Error in getRecentSessions:", err);
    return [];
  }
};

export const getUserSessions = async (userId: string, limit = 10) => {
  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("session_history")
      .select(`companions:companion_id (*)`)
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Failed to fetch user sessions:", error.message);
      return [];
    }

    return data.map(({ companions }) => companions);
  } catch (err) {
    console.error("Error in getUserSessions:", err);
    return [];
  }
};

export const getUserCompanions = async (userId: string) => {
  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("companions")
      .select()
      .eq("author", userId);

    if (error) {
      console.error("Failed to fetch user companions:", error.message);
      return [];
    }

    return data;
  } catch (err) {
    console.error("Error in getUserCompanions:", err);
    return [];
  }
};

export const newCompanionPermissions = async () => {
  // Demo mode: allow unlimited companion creation
  return true;
};

// Bookmarks
export const addBookmark = async (companionId: string, path: string) => {
  try {
    const supabase = createSupabaseAdmin();

    // Check if bookmark already exists
    const { data: existing, error: checkError } = await supabase
      .from("bookmarks")
      .select("id")
      .eq("companion_id", companionId)
      .eq("user_id", DEMO_USER_ID)
      .maybeSingle();
    if (checkError) throw new Error(checkError.message);
    if (existing) return; // Already bookmarked

    // Add to bookmarks
    const { data, error } = await supabase.from("bookmarks").insert({
      companion_id: companionId,
      user_id: DEMO_USER_ID,
    });
    if (error) throw new Error(error.message);

    revalidatePath(path);
    return data;
  } catch (err) {
    console.error("Error in addBookmark:", err);
  }
};

export const removeBookmark = async (companionId: string, path: string) => {
  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("companion_id", companionId)
      .eq("user_id", DEMO_USER_ID);
    if (error) throw new Error(error.message);
    revalidatePath(path);
    return data;
  } catch (err) {
    console.error("Error in removeBookmark:", err);
  }
};

// It's almost the same as getUserCompanions, but it's for the bookmarked companions
export const getBookmarkedCompanions = async (userId: string) => {
  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("bookmarks")
      .select(`companions:companion_id (*)`)
      .eq("user_id", userId);
    if (error) {
      console.error("Failed to fetch bookmarked companions:", error.message);
      return [];
    }
    return data.map(({ companions }) => companions);
  } catch (err) {
    console.error("Error in getBookmarkedCompanions:", err);
    return [];
  }
};

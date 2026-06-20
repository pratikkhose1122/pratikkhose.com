import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Ensure environment variables are present in production.
// Providing fallbacks here for safe local development / build.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

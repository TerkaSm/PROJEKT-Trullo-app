import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://mcgfebhjfstjooftcprn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZ2ZlYmhqZnN0am9vZnRjcHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NTk5MDMsImV4cCI6MjAyMzEzNTkwM30.kHg3fGuDhfYTC1YzpnBwzuyrISj0cCVfQKo0_GvI5CM";

export const supabase = createClient(supabaseURL, supabaseAnonKey)

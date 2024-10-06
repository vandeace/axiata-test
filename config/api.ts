import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database

const baseURL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const baseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""
const ApiClient = () => {
  const supabase = createClient(baseURL, baseKey)

  return supabase
}

export default ApiClient()

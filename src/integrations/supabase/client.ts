// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://papcczkpcofpmkbntbzd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhcGNjemtwY29mcG1rYm50YnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTA0ODEsImV4cCI6MjA2MTE2NjQ4MX0.tK5nrevYs64EPiT6RaMQvDGhJwrMk0qhAvgvlrF5Lyw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
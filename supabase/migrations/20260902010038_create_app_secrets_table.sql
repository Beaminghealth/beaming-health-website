/*
# Create app_secrets table for storing server-side API keys

1. New Tables
   - `app_secrets`
     - `id` (uuid, primary key)
     - `key` (text, unique, not null) — the name of the secret (e.g. "RESEND_API_KEY")
     - `value` (text, not null) — the secret value
     - `created_at` (timestamptz)

2. Security
   - Enable RLS on `app_secrets`.
   - No SELECT/INSERT/UPDATE/DELETE policies for anon or authenticated roles:
     this table is ONLY accessible to the service role (server-side edge functions),
     never from the browser. RLS with no policies = fully locked down.

3. Notes
   - This table stores API keys that edge functions need at runtime.
   - Only the service role key (available in edge functions via Deno.env) can read it.
   - The anon-key frontend client cannot access this table at all.
*/

CREATE TABLE IF NOT EXISTS app_secrets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE app_secrets ENABLE ROW LEVEL SECURITY;

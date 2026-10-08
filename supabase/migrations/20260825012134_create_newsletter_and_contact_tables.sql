/*
# Newsletter subscribers and contact submissions

Creates two tables to capture visitor sign-ups and contact enquiries for the
Liz Palmer wellness website. This is a public marketing site with no login, so
anonymous visitors must be able to submit these forms, but the collected data
must NOT be publicly readable.

1. New Tables
   - `newsletter_subscribers`
     - `id` (uuid, primary key)
     - `first_name` (text) — subscriber's first name
     - `email` (text, unique, not null) — subscriber's email address
     - `created_at` (timestamptz) — when they subscribed
   - `contact_submissions`
     - `id` (uuid, primary key)
     - `name` (text, not null) — sender's name
     - `email` (text, not null) — sender's email
     - `phone` (text) — optional phone number
     - `interest` (text) — area of interest selected in the form
     - `message` (text, not null) — the enquiry message
     - `created_at` (timestamptz) — when submitted

2. Security
   - Enable RLS on both tables.
   - Allow INSERT for `anon` and `authenticated` roles so the public forms work.
   - Deliberately provide NO SELECT/UPDATE/DELETE policies: submissions are
     private and only reviewable by the site owner via the Supabase dashboard,
     never through the public anon-key client.

3. Notes
   - Email uniqueness on newsletter_subscribers prevents duplicate sign-ups;
     the frontend handles the duplicate-insert error gracefully.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text DEFAULT '',
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  interest text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

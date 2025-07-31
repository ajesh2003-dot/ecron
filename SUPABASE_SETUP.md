# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up/Sign in to your account
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - Name: `ecron-technologies`
   - Database Password: (generate a strong password)
   - Region: Choose closest to your users
6. Click "Create new project"

## 2. Get Your Project Credentials

Once your project is created:

1. Go to Settings → API
2. Copy your project URL and anon key:
   - `Project URL`: This is your `VITE_SUPABASE_URL`
   - `anon public`: This is your `VITE_SUPABASE_ANON_KEY`

## 3. Set Up Environment Variables

Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Run Database Migrations

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref your-project-ref
   ```

4. Run the migration:
   ```bash
   supabase db push
   ```

   Or manually run the SQL from `supabase/migrations/001_initial_schema.sql` in your Supabase dashboard.

## 5. Configure Row Level Security (Optional)

The migration includes basic RLS policies that allow public access to insert data. For production, you may want to:

1. Set up authentication
2. Create more restrictive policies
3. Add admin-only access for reading data

## 6. Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Try submitting any form on the website
3. Check your Supabase dashboard → Table Editor to see if data is being saved

## 7. Database Tables Created

The migration creates these tables:
- `contact_messages` - Contact form submissions
- `course_applications` - Course application forms
- `demo_applications` - Demo scheduling requests
- `newsletter_subscriptions` - Email newsletter signups
- `event_registrations` - Event registration forms

## 8. Next Steps

- Set up email notifications for form submissions
- Create an admin dashboard to view submissions
- Configure authentication if needed
- Set up backup and monitoring

## Troubleshooting

- **Connection errors**: Check your environment variables
- **Permission errors**: Verify RLS policies in Supabase dashboard
- **Migration errors**: Run SQL manually in Supabase SQL editor
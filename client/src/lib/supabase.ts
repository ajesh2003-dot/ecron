// TODO: Add new data source
// This file previously contained Supabase configuration and types
// Replace with your preferred database/API solution

export interface Database {
  // Define your database schema here
}

// Placeholder types - replace with actual data types from your new data source
export interface ContactMessage {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  course_interest: string | null;
  message: string;
  created_at: string;
}

export interface CourseApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  course_name: string;
  experience_level: string;
  interest_message: string;
  created_at: string;
}

export interface DemoApplication {
  id: string;
  name: string;
  phone: string;
  email: string;
  course_for_demo: string;
  available_time: string;
  preferred_date: string | null;
  created_at: string;
}

export interface NewsletterSubscription {
  email: string;
  created_at: string;
}

export interface EventRegistration {
  id: string;
  name: string;
  degree: string;
  year: string;
  college_name: string;
  university_name: string;
  contact_number: string;
  alternate_number: string | null;
  email_id: string;
  certificate_code: string;
  created_at: string;
}
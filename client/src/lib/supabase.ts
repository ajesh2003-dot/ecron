import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: ContactMessage
        Insert: Omit<ContactMessage, 'id' | 'created_at'>
        Update: Partial<Omit<ContactMessage, 'id' | 'created_at'>>
      }
      course_applications: {
        Row: CourseApplication
        Insert: Omit<CourseApplication, 'id' | 'created_at'>
        Update: Partial<Omit<CourseApplication, 'id' | 'created_at'>>
      }
      demo_applications: {
        Row: DemoApplication
        Insert: Omit<DemoApplication, 'id' | 'created_at'>
        Update: Partial<Omit<DemoApplication, 'id' | 'created_at'>>
      }
      newsletter_subscriptions: {
        Row: NewsletterSubscription
        Insert: Omit<NewsletterSubscription, 'created_at'>
        Update: Partial<Omit<NewsletterSubscription, 'created_at'>>
      }
      event_registrations: {
        Row: EventRegistration
        Insert: Omit<EventRegistration, 'id' | 'created_at'>
        Update: Partial<Omit<EventRegistration, 'id' | 'created_at'>>
      }
    }
  }
}

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
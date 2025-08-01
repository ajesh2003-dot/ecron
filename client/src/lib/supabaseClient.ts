import { apiRequest } from './queryClient';
import type { 
  InsertContactMessage, 
  InsertCourseApplication, 
  InsertDemoApplication, 
  InsertNewsletterSubscription,
  ContactMessage,
  CourseApplication,
  DemoApplication,
  NewsletterSubscription
} from '../../shared/schema';

// Contact Messages
export const createContactMessage = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  course_interest?: string;
  message: string;
}): Promise<ContactMessage> => {
  const contactData: InsertContactMessage = {
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    phone: data.phone,
    courseInterest: data.course_interest || null,
    message: data.message
  };

  return await apiRequest('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactData)
  });
};

// Course Applications
export const createCourseApplication = async (data: {
  full_name: string;
  email: string;
  phone: string;
  course_name: string;
  experience_level: string;
  interest_message: string;
}): Promise<CourseApplication> => {
  const applicationData: InsertCourseApplication = {
    fullName: data.full_name,
    email: data.email,
    phone: data.phone,
    courseName: data.course_name,
    experienceLevel: data.experience_level,
    interestMessage: data.interest_message
  };

  return await apiRequest('/api/course-applications', {
    method: 'POST',
    body: JSON.stringify(applicationData)
  });
};

// Demo Applications
export const createDemoApplication = async (data: {
  name: string;
  phone: string;
  email: string;
  course_for_demo: string;
  available_time: string;
  preferred_date?: string;
}): Promise<DemoApplication> => {
  const demoData: InsertDemoApplication = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    courseForDemo: data.course_for_demo,
    availableTime: data.available_time,
    preferredDate: data.preferred_date || null
  };

  return await apiRequest('/api/demo-applications', {
    method: 'POST',
    body: JSON.stringify(demoData)
  });
};

// Newsletter Subscriptions
export const createNewsletterSubscription = async (data: {
  email: string;
}): Promise<NewsletterSubscription> => {
  const subscriptionData: InsertNewsletterSubscription = {
    email: data.email
  };

  return await apiRequest('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify(subscriptionData)
  });
};

export const checkNewsletterSubscription = async (email: string): Promise<boolean> => {
  try {
    await apiRequest(`/api/newsletter/check?email=${encodeURIComponent(email)}`);
    return true;
  } catch (error: any) {
    if (error.message.includes('404') || error.message.includes('not found')) {
      return false;
    }
    throw error;
  }
};

// Event Registrations
export const createEventRegistration = async (data: {
  name: string;
  degree: string;
  year: string;
  college_name: string;
  university_name: string;
  contact_number: string;
  alternate_number?: string;
  email_id: string;
  certificate_code: string;
}) => {
  const registrationData = {
    name: data.name,
    degree: data.degree,
    year: data.year,
    collegeName: data.college_name,
    universityName: data.university_name,
    contactNumber: data.contact_number,
    alternateNumber: data.alternate_number || null,
    emailId: data.email_id,
    certificateCode: data.certificate_code
  };

  return await apiRequest('/api/event-registrations', {
    method: 'POST',
    body: JSON.stringify(registrationData)
  });
};

// Authentication functions (dummy implementations)
export const getCurrentUser = async () => {
  // TODO: Implement backend authentication
  return null;
};

export const signUp = async (email: string, password: string) => {
  // TODO: Implement backend authentication
  throw new Error('Authentication not implemented');
};

export const signIn = async (email: string, password: string) => {
  // TODO: Implement backend authentication
  throw new Error('Authentication not implemented');
};

export const signOut = async () => {
  // TODO: Implement backend authentication
  throw new Error('Authentication not implemented');
};
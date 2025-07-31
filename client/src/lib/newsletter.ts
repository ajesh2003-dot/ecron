
// Newsletter subscription interface
export interface NewsletterSubscription {
  email: string;
  createdAt?: string;
}

// Subscribe to newsletter
export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean; error?: string }> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    const emailToSubscribe = email.toLowerCase().trim();
    
    // Check if already subscribed
    // TODO: Replace with your data source API call
    console.log('Newsletter subscription attempt:', emailToSubscribe);
    
    // Simulate successful subscription for now
    await new Promise(resolve => setTimeout(resolve, 500));


    return { success: true };
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    
    return { success: false, error: error.message || 'Failed to subscribe. Please try again.' };
  }
};

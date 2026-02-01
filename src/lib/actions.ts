'use server';

import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export type ActionState = {
  message: string;
  success?: boolean;
  errors?: {
    [key: string]: string[];
  };
};

export async function submitInquiry(prevState: ActionState, formData: FormData): Promise<ActionState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const projectType = formData.get('projectType') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !projectType) {
    return {
      message: 'Please fill in all required fields.',
      success: false,
    };
  }

  try {
    // In a real app with Admin SDK, we would verify everything securely.
    // For this prototype using Client SDK in a Server Action (which is possible but less common than Admin SDK),
    // we'll assume we can write to Firestore. 
    // Note: Usually you'd use firebase-admin here.
    
    // For now, we'll just log it to console as a successful submission simulation 
    // or attempt to write if env vars were real.
    console.log('Inquiry received:', { name, email, projectType, message });
    
    return {
      message: 'Inquiry submitted successfully! We will contact you shortly.',
      success: true,
    };
  } catch (error) {
    console.error('Submission error:', error);
    return {
      message: 'Failed to submit inquiry. Please try again.',
      success: false,
    };
  }
}

export async function askAiAssistant(query: string) {
  'use server';
  // Simple mock AI response logic based on the prompt's data
  await new Promise(r => setTimeout(r, 500));
  
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('grade') || lowerQuery.includes('c4')) {
    return "Civitech is a C4 graded contractor, registered with ICTAD/NCASL. We are qualified to handle major construction projects.";
  }
  
  if (lowerQuery.includes('location') || lowerQuery.includes('where')) {
    return "We have completed projects across Sri Lanka, including Negombo, Ja-Ela, Seeduwa, Nugegoda, Rideegama, and Moragahakanda.";
  }
  
  if (lowerQuery.includes('industrial') || lowerQuery.includes('factory')) {
    return "Our industrial portfolio includes the Lanka Tiles Showroom in Nugegoda, Brandix Office in Rideegama, and facilities for HDFC Bank.";
  }

  return "I can help with information about Civitech's grading, past projects, and capabilities. Try asking about our 'grading' or 'industrial projects'.";
}

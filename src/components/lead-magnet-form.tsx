'use client';

import { useActionState } from 'react';
import { submitInquiry } from '@/lib/actions';
import { Loader2 } from 'lucide-react';

const initialState = {
  message: '',
  success: false,
};

export function LeadMagnetForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState);

  return (
    <div className="bg-card p-8 rounded-xl shadow-lg border border-border text-card-foreground">
      <h3 className="text-2xl font-bold mb-2">Start Your Project</h3>
      <p className="text-muted-foreground mb-6">Get a technical estimate based on our C4 grading standards.</p>
      
      {state.success ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-900">
          {state.message}
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input name="name" type="text" required className="w-full p-2 border border-input rounded-md bg-background" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email" required className="w-full p-2 border border-input rounded-md bg-background" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Project Type</label>
            <select name="projectType" className="w-full p-2 border border-input rounded-md bg-background">
              <option value="Industrial">Industrial</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Water">Water Project</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" rows={3} className="w-full p-2 border border-input rounded-md bg-background"></textarea>
          </div>
          
          {state.message && !state.success && (
            <p className="text-destructive text-sm">{state.message}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-md transition-colors flex justify-center items-center"
          >
            {isPending ? <Loader2 className="animate-spin mr-2" /> : 'Get Estimate'}
          </button>
        </form>
      )}
    </div>
  );
}
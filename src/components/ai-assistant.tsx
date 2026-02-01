'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { askAiAssistant } from '@/lib/actions';

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am the Civitech Project Assistant. Ask me about our grading, past projects, or locations.' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await askAiAssistant(userText);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-card rounded-lg shadow-2xl w-80 mb-4 border border-border overflow-hidden flex flex-col"
              style={{ maxHeight: '500px', height: '400px' }}
            >
              <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
                <h3 className="font-bold">Project Assistant</h3>
                <button onClick={() => setIsOpen(false)} className="hover:bg-primary/80 rounded p-1">
                  <X size={16} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-br-none' 
                        : 'bg-card border border-border rounded-bl-none shadow-sm text-card-foreground'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                   <div className="flex justify-start">
                   <div className="bg-card p-3 rounded-lg rounded-bl-none shadow-sm text-sm text-muted-foreground">
                     Typing...
                   </div>
                 </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-3 bg-card border-t border-border flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about our grading..."
                  className="flex-1 text-sm p-2 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-primary text-primary-foreground p-2 rounded hover:bg-primary/90 disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </div>
    </>
  );
}
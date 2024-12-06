import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface ForgotPasswordFormProps {
  onBack: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle password reset email logic here
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Mail className="w-12 h-12 text-purple-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Check Your Email</h3>
        <p className="text-gray-600 mb-6">
          We've sent password reset instructions to {email}
        </p>
        <Button variant="outline" onClick={onBack} className="w-full">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reset Your Password</h2>
      <p className="text-gray-600 mb-6">
        Enter your email address and we'll send you instructions to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Reset Instructions
        </Button>
        <Button variant="outline" onClick={onBack} className="w-full">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>
      </form>
    </motion.div>
  );
};
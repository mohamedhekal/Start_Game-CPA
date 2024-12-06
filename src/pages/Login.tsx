import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LogIn, GamepadIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm';
import type { LoginCredentials } from '../types/auth';

export const Login: React.FC = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block"
          >
            <GamepadIcon className="w-12 h-12 text-purple-500 mx-auto" />
          </motion.div>
          <h2 className="text-2xl font-bold mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Welcome  Back
          </h2>
        </div> 

        {showForgotPassword ? (
          <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-purple-500 hover:text-purple-600"
                >
                  Forgot your password?
                </button>
              </div>

              <Button type="submit" className="w-full">
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </Button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-purple-500 hover:text-purple-600 font-medium">
                Register here
              </Link>
            </p>
          </>
        )}
      </Card>
    </div>
  );
};
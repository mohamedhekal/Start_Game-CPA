import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { UserPlus, GamepadIcon, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import type { RegisterCredentials } from '../types/auth';

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 
  'France', 'Spain', 'Italy', 'Japan', 'China', 'India', 'Brazil'
];

export const Register: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    email: '',
    company: '',
    phone: '',
    firstName: '',
    lastName: '',
    photo: null,
    address: '',
    city: '',
    country: '',
    postalCode: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCredentials({ ...credentials, photo: e.target.files[0] });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <Card className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block"
          >
            <GamepadIcon className="w-12 h-12 text-purple-500 mx-auto" />
          </motion.div>
          <h2 className="text-2xl font-bold mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Account Registration
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
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
                Company
              </label>
              <input
                type="text"
                value={credentials.company}
                onChange={(e) => setCredentials({ ...credentials, company: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={credentials.phone}
                onChange={(e) => setCredentials({ ...credentials, phone: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={credentials.firstName}
                onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={credentials.lastName}
                onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Photo
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={triggerFileInput}
                  className="flex items-center"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Image
                </Button>
                <span className="text-sm text-gray-500">
                  {credentials.photo ? credentials.photo.name : 'No file chosen'}
                </span>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Present Address
              </label>
              <input
                type="text"
                value={credentials.address}
                onChange={(e) => setCredentials({ ...credentials, address: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                value={credentials.city}
                onChange={(e) => setCredentials({ ...credentials, city: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                value={credentials.country}
                onChange={(e) => setCredentials({ ...credentials, country: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                value={credentials.postalCode}
                onChange={(e) => setCredentials({ ...credentials, postalCode: e.target.value })}
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
                minLength={8}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={credentials.confirmPassword}
                onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
                minLength={8}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={credentials.acceptTerms}
              onChange={(e) => setCredentials({ ...credentials, acceptTerms: e.target.checked })}
              className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{' '}
              <a href="/terms" className="text-purple-500 hover:text-purple-600">
                Terms and Conditions
              </a>
            </label>
          </div>

          <Button type="submit" className="w-full">
            <UserPlus className="w-5 h-5 mr-2" />
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-500 hover:text-purple-600 font-medium">
            Sign in here
          </Link>
        </p>
      </Card>
    </div>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Level Up
          </span> Your Gaming Revenue
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Join the ultimate gaming monetization platform. Partner with premium advertisers and unlock your earning potential.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/register">
            <Button size="lg" className="flex items-center">
              <Gamepad2 className="w-5 h-5 mr-2" />
              Start Earning
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
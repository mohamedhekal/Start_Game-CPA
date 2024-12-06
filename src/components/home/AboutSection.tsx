import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300">
              To revolutionize gaming monetization by connecting publishers with high-converting offers while ensuring maximum value for advertisers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Lightbulb className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-300">
              To become the world's leading gaming-focused CPA network, driving innovation in performance marketing within the gaming industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Heart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Our Values</h3>
            <p className="text-gray-300">
              We believe in transparency, innovation, and building lasting partnerships that drive mutual success in the gaming ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
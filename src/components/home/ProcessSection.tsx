import React from 'react';
import { motion } from 'framer-motion';
import { ListChecks, Gift, Search, Building2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse offers',
    description: 'Users choose preferred offers from our extensive catalog.'
  },
  {
    icon: ListChecks,
    title: 'Complete tasks',
    description: 'Users complete the required tasks to earn rewards.'
  },
  {
    icon: Gift,
    title: 'Collect rewards',
    description: 'Users receive their well-deserved rewards instantly.'
  }
];

const partners = [
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200'
];

export const ProcessSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Effortless Platform <span className="text-purple-500">Monetization</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seamlessly engage users with ad units that bridge the connection between brands and apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl backdrop-blur-lg"
            >
              <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-2"
          >
            <Building2 className="w-6 h-6 text-purple-500" />
            Tracking Partners
          </motion.h3>
          <p className="text-gray-400 mb-8">
            Facilitating user acquisition for top-tier companies
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {partners.map((partner, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                src={partner}
                alt={`Partner ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
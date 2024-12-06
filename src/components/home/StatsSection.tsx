import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Trophy, Rocket } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Publishers', value: '10,000+' },
  { icon: DollarSign, label: 'Paid to Partners', value: '$5M+' },
  { icon: Trophy, label: 'Successful Campaigns', value: '25,000+' },
  { icon: Rocket, label: 'Average Conversion Rate', value: '12.5%' },
];

export const StatsSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((Stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-500" />
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-3xl font-bold text-white mb-2"
              >
                {Stat.value}
              </motion.p>
              <p className="text-gray-400">{Stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
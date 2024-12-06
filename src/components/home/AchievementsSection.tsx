import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap, Globe } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Best Gaming CPA Network 2024',
    description: 'Recognized for excellence in gaming monetization'
  },
  {
    icon: Shield,
    title: 'Certified Partner Network',
    description: 'Verified by major game publishers worldwide'
  },
  {
    icon: Zap,
    title: 'Fastest Growing Platform',
    description: '300% YoY growth in publisher earnings'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Active in 150+ countries worldwide'
  }
];

export const AchievementsSection: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our <span className="text-purple-500">Achievements</span>
          </h2>
          <p className="text-gray-400">Recognition that reflects our commitment to excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl backdrop-blur-lg"
            >
              <achievement.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
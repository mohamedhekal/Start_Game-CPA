import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, BarChart, Trophy, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import type { Ad } from '../../types/ad';

interface AdCardProps {
  ad: Ad;
}

export const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/offer/${ad.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
      <div className="relative h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
        <div className="relative h-48">
          <img
            src={ad.imageUrl}
            alt={ad.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          <div className="absolute top-2 right-2 flex gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1"
            >
              <DollarSign className="w-4 h-4" />
              {ad.payout}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1"
            >
              <Trophy className="w-4 h-4" />
              {ad.category}
            </motion.div>
          </div>
        </div>
        
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
            {ad.title}
          </h3>
          <p className="text-gray-300 mb-4">{ad.description}</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-green-400">
                <BarChart className="w-4 h-4" />
                <span>{ad.conversionRate}% conversion rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <Users className="w-4 h-4" />
                <span>Active Campaign</span>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-2"
            >
              <p className="text-sm font-semibold text-purple-400">Requirements:</p>
              <ul className="space-y-2">
                {ad.requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    {req}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div className="p-6 pt-0">
          <Button 
            className="w-full group/button relative overflow-hidden"
            variant="primary"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <DollarSign className="w-4 h-4" />
              View Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
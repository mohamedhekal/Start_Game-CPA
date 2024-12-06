import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Alex Thompson',
    role: 'Gaming Publisher',
    content: 'GameAdsNet has transformed my revenue stream. Their campaigns consistently deliver high conversion rates.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Sarah Chen',
    role: 'Mobile Game Developer',
    content: 'The best CPA network for gaming offers. Their support team is incredibly responsive and helpful.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Affiliate Marketer',
    content: 'Impressive payouts and a great variety of offers. GameAdsNet is now my go-to platform for gaming campaigns.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            What Our <span className="text-purple-500">Partners</span> Say
          </h2>
          <p className="text-gray-400">Join thousands of satisfied publishers and developers</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl backdrop-blur-lg"
            >
              <Quote className="w-8 h-8 text-purple-500 mb-4" />
              <p className="text-gray-300 mb-4">{review.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AdCard } from '../components/ads/AdCard';
import { AdFilters } from '../components/ads/AdFilters';
import type { Ad } from '../types/ad';

const mockAds: Ad[] = [
  {
    id: '1',
    title: 'Epic Fantasy RPG',
    description: 'Promote our newest RPG game with stunning graphics and immersive gameplay.',
    payout: 45,
    category: 'RPG',
    requirements: ['User reaches level 10', 'Completes tutorial', 'Makes first in-game purchase'],
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1200',
    conversionRate: 12.5
  },
  {
    id: '2',
    title: 'Strategy Battle Royale',
    description: 'Fast-paced battle royale with unique strategy elements.',
    payout: 35,
    category: 'Strategy',
    requirements: ['User wins first match', 'Reaches account level 5'],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    conversionRate: 8.3
  },
  {
    id: '3',
    title: 'Mobile MMORPG',
    description: 'Next-gen mobile MMORPG with console-quality graphics.',
    payout: 50,
    category: 'MMORPG',
    requirements: ['Character creation', 'Joins a guild', 'Reaches level 15'],
    imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=1200',
    conversionRate: 15.7
  }
];

const categories = ['All', 'RPG', 'Strategy', 'MMORPG', 'Action', 'Sports'];

export const AdsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAds = mockAds.filter(ad => {
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ad.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">
            Available{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Gaming Campaigns
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Choose from our curated selection of high-converting gaming offers
          </p>
        </motion.div>

        {/* Filters */}
        <AdFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAds.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>

        {/* Empty State */}
        {filteredAds.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No campaigns found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
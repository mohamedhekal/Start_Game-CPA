import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Clock, CheckCircle, Coins } from 'lucide-react';
import { Card } from '../components/ui/Card';
import type { OfferDetails as OfferDetailsType } from '../types/offer';

// Mock data - replace with actual API call
const mockOfferDetails: OfferDetailsType = {
  userStats: {
    playerId: "PLAYER123",
    totalPoints: 1250,
    completedOffers: 8
  },
  clickedOffers: [
    { id: "1", offerName: "Epic Fantasy RPG", clickedAt: "2024-03-15T10:30:00Z" },
    { id: "2", offerName: "Strategy Battle Royale", clickedAt: "2024-03-14T15:45:00Z" }
  ],
  completedOffers: [
    { id: "1", offerName: "Mobile MMORPG", points: 50, completedAt: "2024-03-13T09:20:00Z" },
    { id: "2", offerName: "Epic Fantasy RPG", points: 45, completedAt: "2024-03-12T14:15:00Z" }
  ]
};

export const OfferDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white">
            Offer Details{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              #{id}
            </span>
          </h1>
        </motion.div>

        {/* Player Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Player ID</p>
                <p className="text-xl font-bold">{mockOfferDetails.userStats.playerId}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Coins className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Total Points</p>
                <p className="text-xl font-bold">{mockOfferDetails.userStats.totalPoints}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Completed Offers</p>
                <p className="text-xl font-bold">{mockOfferDetails.userStats.completedOffers}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Clicked Offers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 text-white">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              Clicked Offers
            </h2>
            <div className="space-y-4">
              {mockOfferDetails.clickedOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer"
                >
                  <span className="font-medium text-gray-200">{offer.offerName}</span>
                  <span className="text-sm text-gray-400">{formatDate(offer.clickedAt)}</span>
                </motion.div>
              ))}
              {mockOfferDetails.clickedOffers.length === 0 && (
                <p className="text-gray-400 text-center py-4">No clicked offers yet</p>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Completed Offers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 text-white">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Completed Offers
            </h2>
            <div className="space-y-4">
              {mockOfferDetails.completedOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer"
                >
                  <div>
                    <span className="font-medium text-gray-200">{offer.offerName}</span>
                    <div className="text-sm text-purple-400 mt-1">+{offer.points} points</div>
                  </div>
                  <span className="text-sm text-gray-400">{formatDate(offer.completedAt)}</span>
                </motion.div>
              ))}
              {mockOfferDetails.completedOffers.length === 0 && (
                <p className="text-gray-400 text-center py-4">No completed offers yet</p>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Target, Trophy, Coins } from 'lucide-react';
import { Button } from '../ui/Button';

export const MarketingSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Level Up Your Gaming Revenue with{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Star Games
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Looking to maximize your gaming revenue? Join forces with top-tier advertisers and unlock premium monetization opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">High-Impact Ad Formats</h3>
                  <p className="text-gray-400">Video, banner, interstitial, and offerwall placements that engage without disrupting.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Smart Targeting</h3>
                  <p className="text-gray-400">AI-powered targeting ensures your ads reach the right gamers at the right time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Coins className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Competitive Payouts</h3>
                  <p className="text-gray-400">Industry-leading eCPM rates and timely payments for maximum revenue.</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="mt-8">
              <Rocket className="w-5 h-5 mr-2" />
              Start Monetizing
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-3xl border border-purple-500/20">
              <div className="grid gap-6">
                <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Trophy className="w-8 h-8 text-purple-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Premium Advertisers</h4>
                      <p className="text-sm text-gray-400">Direct partnerships with top gaming brands</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-purple-400">50+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Zap className="w-8 h-8 text-blue-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Average eCPM</h4>
                      <p className="text-sm text-gray-400">Higher than industry standard</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-blue-400">$12.5</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Target className="w-8 h-8 text-purple-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Conversion Rate</h4>
                      <p className="text-sm text-gray-400">Above market average</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-purple-400">18.5%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { PopularGamesSection } from '../components/home/PopularGamesSection';
import { MarketingSection } from '../components/home/MarketingSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { AboutSection } from '../components/home/AboutSection';
import { AchievementsSection } from '../components/home/AchievementsSection';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <HeroSection />
      <StatsSection />
      <PopularGamesSection />
      <MarketingSection />
      <ProcessSection />
      <AboutSection />
      <AchievementsSection />
      <ReviewsSection />
    </div>
  );
};
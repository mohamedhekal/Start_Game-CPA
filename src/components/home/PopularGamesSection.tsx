import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Star, Users, Trophy } from 'lucide-react';

const popularGames = [
  {
    title: 'Epic Fantasy RPG',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800',
    category: 'RPG',
    players: '1M+',
    rating: 4.8
  },
  {
    title: 'Space Warriors',
    image: 'https://images.unsplash.com/photo-1614285457768-646f65ca8548?auto=format&fit=crop&q=80&w=800',
    category: 'Strategy',
    players: '500K+',
    rating: 4.7
  },
  {
    title: 'Racing Legends',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    category: 'Racing',
    players: '2M+',
    rating: 4.9
  },
  {
    title: 'Zombie Survival',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    category: 'Action',
    players: '800K+',
    rating: 4.6
  }
];

export const PopularGamesSection: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Popular <span className="text-purple-500">Games</span>
          </h2>
          <p className="text-gray-400">Discover top-performing games in our network</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularGames.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-purple-400">
                    <Gamepad2 className="w-4 h-4 mr-1" />
                    {game.category}
                  </span>
                  <span className="flex items-center text-blue-400">
                    <Users className="w-4 h-4 mr-1" />
                    {game.players}
                  </span>
                </div>
                <div className="flex items-center mt-2 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1">{game.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
'use client';
import React from 'react';
import apiRequest from '@/apiRequest';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { IGames } from '@/types/types';
import FeedItem from './FeedItem';

interface GameOddValue {
  value: string;
  odd: string;
}

interface GameOdd {
  id: number;
  name: string;
  values: GameOddValue[];
}

const UpcomingFeed = () => {
  const [liveGames, setLiveGames] = useState([]);
  const [gameOdds, setGameOdds] = useState<GameOdd[]>([]);

  useEffect(() => {
    const fetchLiveGames = async () => {
      const res = await apiRequest(`games`, {
        league: '12',
        season: '2023-2024',
        date: '2024-02-23',
      });
      setLiveGames(res.response);
    };
    fetchLiveGames();
  }, []);

  return (
    <div className="flex justify-center">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full lg:max-w-4xl md:max-w-2xl sm:max-w-lg"
      >
        <CarouselContent className="ml-5">
          {liveGames.map((game: IGames) => {
            const gameTime = game.date
              .toString()
              .slice(game.date.toString().indexOf('T') + 1, 19);
            const gameDateTime = new Date(`2000-01-01T${gameTime}`);
            gameDateTime.setHours(gameDateTime.getHours() - 5);
            const newGameTime = gameDateTime.toTimeString().slice(0, 5);
            return (
              <FeedItem game={game} newGameTime={newGameTime} key={game.id} />
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default UpcomingFeed;

'use client';
import { useParams } from 'next/navigation';
import apiRequest from '@/apiRequest';
import { useEffect, useState } from 'react';
import { IGames } from '@/types/types';
import { FadeLoader } from 'react-spinners';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';

const page = () => {
  const gameId = useParams();
  const [game, setGame] = useState<IGames | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGameInfo = async () => {
      try {
        const res = await apiRequest(`games`, { id: gameId.id });
        setGame(res.response[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getGameInfo();
  }, []);

  const [homeTeam, setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();

  useEffect(() => {
    const getHomeTeamInfo = async () => {
      try {
        const res = await apiRequest('statistics', {
          league: 12,
          season: '2023-2024',
          team: game?.teams.home.id,
        });
        setHomeTeam(res.response);
      } catch (error) {
        console.log(error);
      }
    };
    getHomeTeamInfo();
  }, [game]);

  console.log(homeTeam);

  useEffect(() => {
    const getAwayTeamInfo = async () => {
      try {
        const res = await apiRequest('statistics', {
          league: 12,
          season: 2023 - 2024,
          team: game?.teams.away.id,
        });
        setAwayTeam(res.response);
      } catch (error) {
        console.log(error);
      }
    };
    getAwayTeamInfo();
  }, [game]);

  return (
    <section>
      <MaxWidthWrapper>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <FadeLoader color="#36d7b7" />
          </div>
        ) : (
          <div>
            <header className="flex mt-10 border w-full rounded-lg border-primary items-center ">
              <div className="flex flex-col px-16 pt-16 pb-8 ">
                <h1 className="text-3xl">
                  {game?.teams.away.name} vs {game?.teams.home.name}
                </h1>
                <h2 className="text-lg mt-4">Odds & Stats</h2>
              </div>
              <Image
                src={`${game?.league.logo}`}
                alt="league-logo"
                width={20}
                height={20}
                className="w-10 h-20 bg-contain bg-center ml-auto mr-20"
              ></Image>
            </header>
            <section></section>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default page;

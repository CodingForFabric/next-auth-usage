import { IGames } from '@/types/types';
import Link from 'next/link';
import { CarouselItem } from './ui/carousel';

interface Props {
  game: IGames;
  newGameTime: string;
}

const FeedItem = ({ game, newGameTime }: Props) => {
  return (
    <CarouselItem className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2 -pl-10">
      <Link href={`games/${game.id}`}>
        <div className=" border-slate-500  border-b border-t   border-l pl-1 pr-1 cursor-pointer">
          <div className="text-nowrap">{newGameTime} PM</div>
          <div className="flex">
            <div className="flex flex-col">
              <h1 className="text-nowrap">{game.teams.away.name}</h1>
              <h1 className="text-nowrap"> {game.teams.home.name}</h1>
            </div>
            <div className="flex flex-col ml-5">
              <h1 className="ml-0.5 text-green-500"></h1>
              <h1 className="ml-1 text-green-500"></h1>
            </div>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
};

export default FeedItem;

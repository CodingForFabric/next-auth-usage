import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import UpcomingFeed from '@/components/UpcomingFeed';
import UserInfo from '@/components/UserInfo';

export default function Home() {
  return (
    <main className="flex mt-10 flex-col">
      <UpcomingFeed />
      <MaxWidthWrapper>
        <main className="flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="mt-5 text-3xl font-bold  mb-8">
              The place for everything sports.
            </h1>
            <Button className="w-40 rounded-full h-12">Join Now</Button>
            <p className="mt-8 opacity-80 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              repudiandae quaerat provident expedita? Animi quia, in quam
              dolores esse nostrum provident? Illum, itaque omnis optio magni
              dolores tempore cumque quod! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eos dolor corrupti veniam velit ex
              unde doloribus placeat? Quis, iste? Asperiores quae eligendi
              numquam natus illo aspernatur repellat consequuntur quod dolor a
              itaque blanditiis, ea veniam velit iure aut perspiciatis esse.
            </p>
            <UserInfo />
          </div>
        </main>
      </MaxWidthWrapper>
    </main>
  );
}

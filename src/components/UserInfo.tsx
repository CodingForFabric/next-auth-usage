'use client';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div>
      <div>UserInfo</div>
      <div>Email:{session?.user?.email}</div>
      <div>Password:{session?.user?.email}</div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default UserInfo;

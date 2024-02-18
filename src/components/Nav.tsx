'use client';
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { buttonVariants } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { SunMoon } from 'lucide-react';
import NavDropdowns from './NavDropdowns';

const Nav = () => {
  const user = null;
  const { setTheme } = useTheme();
  const [theme, setCurTheme] = useState<'light' | 'dark'>('dark');
  const toggleTheme = () => {
    theme === 'light' ? setCurTheme('dark') : setCurTheme('light');
    setTheme(theme);
  };

  return (
    <nav>
      <MaxWidthWrapper>
        <div className="flex items-center h-16 mt-2">
          <Switch checked={theme === 'light'} onCheckedChange={toggleTheme} />
          <SunMoon className="ml-4" />
          <div className="flex ml-4">
            <Link href="/">Logo</Link>
          </div>
          <NavDropdowns />
          <div className="ml-auto flex items-center">
            <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {user ? (
                <p></p>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Sign In
                  </Link>
                  <span
                    className="h-6 w-px bg-gray-200 mx-5"
                    aria-hidden="true"
                  ></span>
                  <Link href="/sign-up" className={buttonVariants()}>
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Nav;

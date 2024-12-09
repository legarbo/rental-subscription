'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { RbLogo } from '@/components/ui/rb-logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import s from './Navbar.module.css';
import { lusitana } from '@/components/ui/fonts';
import { cn } from '@/utils/cn';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="align-center relative flex flex-row justify-between py-4 md:py-6">
      <div className="flex flex-1 items-center">
        <Link href="/" className={s.logo} aria-label="Logo">
          <RbLogo />
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          <Link href="/pricing" className={cn(`s.link ${lusitana.className}`)}>
            Pricing
          </Link>
          {user && (
            <Link
              href="/account"
              className={cn(`s.link ${lusitana.className}`)}
            >
              Account
            </Link>
          )}
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={usePathname()} />
            <button
              type="submit"
              className={cn(`s.link ${lusitana.className}`)}
            >
              Sign out
            </button>
          </form>
        ) : (
          <Link href="/signin" className={cn(`s.link ${lusitana.className}`)}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

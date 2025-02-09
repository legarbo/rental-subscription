import Link from 'next/link';

import { RbLogo } from '@/components/ui/rb-logo';
import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] bg-zinc-900 px-6">
      <div className="grid grid-cols-1 gap-8 border-b border-zinc-600 bg-zinc-900 py-12 text-white transition-colors duration-150 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="flex flex-initial items-center font-bold md:mr-20"
          >
            <RbLogo />
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/about"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                About
              </Link>
            </li>

            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex items-start text-white lg:col-span-6 lg:justify-end">
          <div className="flex h-10 items-center space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/legarbo/rental-subscription/tree/main"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between space-y-4 bg-zinc-900 py-12 md:flex-row">
        <div>
          <span>
            &copy; {new Date().getFullYear()} RENTALS BUREAU, Inc. All rights
            reserved.
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-white">Crafted by</span>
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="ml-4 inline-block h-6 text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

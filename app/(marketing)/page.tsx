import Link from 'next/link';
import { lusitana } from '@/components/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BigRbLogo } from '@/components/ui/rb-logo';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col px-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50/70 px-6 py-10 md:w-2/5 md:px-20">
          <BigRbLogo />
          <p className="${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to Rentals Bureau.</strong> This is the example for
            the{' '}
            <a href="https://nextjs.org/learn/" className="text-gray-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/dashboard"
            className="hover:bg-b-400 flex items-center gap-5 self-start rounded-lg bg-gray-500 px-6 py-3 text-sm font-medium text-white transition-colors md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-yellow-50/90 p-6 md:w-3/5 md:p-0">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1465}
            height={715}
            className="hidden rounded-lg md:block md:object-cover"
            alt="Screenshot of the dashboard project showing desktop version"
          />

          <Image
            src="/hero-mobile.jpg"
            width={560}
            height={620}
            className="block rounded-lg md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </div>
  );
}

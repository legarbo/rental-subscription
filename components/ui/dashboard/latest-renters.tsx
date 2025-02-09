import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/components/ui/fonts';
import { fetchLatestRenters } from '@/app/lib/data';
import { createClient } from '@/utils/supabase/server';

export default async function LatestRenters() {
  const supabase = createClient();
  const latestRenters = await fetchLatestRenters(supabase);
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Renters
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {latestRenters!.map((renter, i) => {
            return (
              <div
                key={renter.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0
                  }
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={renter.avatar_url}
                    alt={`${renter.last_name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-500 md:text-base">
                      {renter.last_name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {renter.email}
                    </p>
                  </div>
                </div>
                {/* <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {renter.amount}
                </p> */}
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}

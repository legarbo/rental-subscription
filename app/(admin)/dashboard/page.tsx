import CardWrapper from '@/components/ui/dashboard/cards';
import RevenueChart from '@/components/ui/dashboard/revenue-chart';
import LatestRenters from '@/components/ui/dashboard/latest-renters';
import { lusitana } from '@/components/ui/fonts';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestRentersSkeleton,
  CardsSkeleton
} from '@/components/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard'
};
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { getSubscription } from '@/utils/supabase/queries';
import { getProducts } from '@/utils/supabase/queries';

export default async function DashboardPage() {
  const supabase = await createClient();
  const subscription = await getSubscription(supabase);
  const products = await getProducts(supabase);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/signin');
  }

  if (subscription === null) {
    redirect('/pricing');
  }

  return (
    <main>
      <p>{`Hello ${data.user.email}`}</p>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestRentersSkeleton />}>
          <LatestRenters />
        </Suspense>
      </div>
    </main>
  );
}

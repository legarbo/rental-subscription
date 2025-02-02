import Pagination from '@/components/ui/renters/pagination';
import RentersTable from '@/components/ui/renters/renters-table';
import { fetchRentersPages } from '@/app/lib/data';
import { Search } from './search';
import { Metadata } from 'next';
import { lusitana } from '@/components/ui/fonts';
import { RentersTableSkeleton } from '@/components/ui/skeletons';
import { Suspense } from 'react';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'all-renters'
};

export default async function AllRentersPage({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const supabase = createClient();
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages: number = await fetchRentersPages(query, supabase);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Renters</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search renters..." />
      </div>
      <Suspense key={query + currentPage} fallback={<RentersTableSkeleton />}>
        <RentersTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

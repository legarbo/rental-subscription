import Pagination from '@/components/ui/renters/pagination';
import RentersTable from '@/components/ui/renters/renters-table';
import { Search } from './search';
import { Metadata } from 'next';
import { lusitana } from '@/components/ui/fonts';

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
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchRentersPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Renters</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search renters..." />
      </div>
      <RentersTable query={query} currentPage={currentPage} />
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}

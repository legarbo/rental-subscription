import { createClient } from '@/utils/supabase/server';
import RentersTable from '@/components/ui/renters/own-renters-table';
import { Search } from '../all-renters/search';

type PageProps = {
  searchParams: { query?: string };
};
export default async function OwnRenters({
  searchParams: { query = '' }
}: PageProps) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <>
      <h1>My own renters</h1>
      <p>{`Hello ${data.user?.email}`}</p>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search renters..." />
      </div>
      <RentersTable query={query} currentPage={1} />
    </>
  );
}

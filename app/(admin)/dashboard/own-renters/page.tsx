import { createClient } from '@/utils/supabase/server';
import RentersTable from '@/components/ui/renters/own-renters-table';

type PageProps = {
  searchParams: { query?: string; customerId?: string };
};
export default async function OwnRenters({
  searchParams: { query = '', customerId = '' }
}: PageProps) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <>
      <h1>My own renters</h1>
      <p>{`Hello ${data.user?.email}`}</p>
      <RentersTable customerId={data.user?.id} query={''} currentPage={1} />
    </>
  );
}

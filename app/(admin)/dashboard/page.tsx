import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { getSubscription } from '@/utils/supabase/queries';

export default async function DashboardPage() {
  const supabase = await createClient();
  const subscription = await getSubscription(supabase);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/signin');
  }

  if (subscription === null) {
    redirect('/pricing');
  }

  return <p>Hello {data.user.email}</p>;
}

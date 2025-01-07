import { SupabaseClient } from '@supabase/supabase-js';
import { getUser } from '@/utils/supabase/queries';
import { cache } from 'react';
import { unstable_cache } from 'next/cache';

export const FetchRenters = cache(async (supabase: SupabaseClient) => {
  const { data, error } = await supabase.from('renters').select();

  return data;
});

export const FetchCustomersWithRenters = cache(
  async (supabase: SupabaseClient) => {
    const { data, error } = await supabase.from('customers').select(`
    id, stripe_customer_id,
    renters (
      last_name,
      email
    )
  `);

    return data;
  }
);
async function getUserId(supabase: SupabaseClient) {
  const { data, error } = await supabase.auth.getUser();
  return data.user?.id;
}

export const FetchOwnRenters = cache(
  async (query: string, supabase: SupabaseClient) => {
    const user_id = await getUserId(supabase);

    const { data, error } = await supabase
      .from('renters')
      .select(
        `
      first_name,
      last_name,
      email,
      phone,
      customer_id,
      status,
      created_at
      `
      )
      .eq('customer_id', user_id);

    return data;
  }
);

export const fetchFilteredRenters = cache(
  async (query: string, supabase: SupabaseClient) => {
    if (query === '') {
      const { data, error } = await supabase.from('renters').select(
        `
      first_name,
      last_name,
      email,
      phone,
      customer_id,
      status,
      created_at
      `
      );
      return data;
    }

    const { data, error } = await supabase.rpc(
      'search_renters_by_name_prefix',
      { prefix: query }
    );
    return data;
  }
);

export const FetchCustomers = cache(async (supabase: SupabaseClient) => {
  const { data, error } = await supabase.from('customers').select();

  return data;
});

async function wait(duration: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

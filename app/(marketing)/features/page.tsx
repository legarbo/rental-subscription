import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { getProducts } from '@/utils/supabase/queries';

export default async function FeaturesPage() {
  const supabase = await createClient();
  const products = await getProducts(supabase);

  console.log({ products });

  return (
    <>
      <div>
        {products!.map((product) => (
          <li key={product.id} id={product.id}>
            <p>{product.name}</p>
            <p> {`Description: ${product.description}`}</p>
            <p>{`IsActive: ${String(product.active)}`}</p>
            {product.prices.map((priObj: any) => (
              <p
                key={priObj.id}
                id={priObj.id}
              >{`Price (monthly/annually) $${priObj.unit_amount / 100}`}</p>
            ))}
          </li>
        ))}
      </div>
    </>
  );
}

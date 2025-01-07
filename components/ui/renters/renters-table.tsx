import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/components/ui/renters/buttons';
import RenterStatus from '@/components/ui/renters/status';
import { FetchRenters } from '@/app/lib/data';
import { fetchFilteredRenters } from '@/app/lib/data';
import { RentersTable as RentTable } from '@/app/lib/definitions';
import { createClient } from '@/utils/supabase/server';
import { type FormattedRentersTable } from '@/app/lib/definitions';
import { formatDateToLocal } from '@/app/lib/utils';

type RentersTablePropos = {
  query: string;
  currentPage?: number;
};

export default async function RentersTable({
  query,
  currentPage
}: RentersTablePropos) {
  const supabase = createClient();
  const renters = await fetchFilteredRenters(query, supabase);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <>
              {renters?.map((renter: any, indx: number) => (
                <div key={indx} className="mb-2 w-full rounded-md bg-white p-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                          src={''}
                          className="mr-2 rounded-full"
                          width={28}
                          height={28}
                          alt={`${renter.name}'s profile picture`}
                        />
                      </div>
                      <p className="text-sm text-gray-500">{`${renter.first_name} ${renter.last_name}`}</p>
                      <p className="text-sm text-gray-500">{renter.email}</p>
                      <p className="text-sm text-gray-500">{renter.phone}</p>
                      <p className="text-sm text-gray-500">
                        {formatDateToLocal(renter.created_at)}
                      </p>
                    </div>
                    <RenterStatus status={renter.status} />
                  </div>
                  {/* <div className="flex w-full items-center justify-between pt-4">
                  
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div> */}
                </div>
              ))}
            </>
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Renter
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium"></th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <>
                {renters?.map((renter: any, indx: number) => (
                  <tr
                    key={indx}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={renter.image_url}
                          className="rounded-full"
                          width={28}
                          height={28}
                          alt=""
                        />
                        <p>{`${renter.first_name} ${renter.last_name}`}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {renter.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {renter.phone}
                    </td>

                    {/* <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(renter.date)}
                  </td> */}
                    <td className="whitespace-nowrap px-3 py-3">
                      <RenterStatus status={renter.status} />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatDateToLocal(renter.created_at)}
                    </td>
                    {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateInvoice id={renter.id} />
                        <DeleteInvoice id={renter.id} />
                      </div>
                    </td> */}
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

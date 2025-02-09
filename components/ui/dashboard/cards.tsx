import { fetchCardData } from '@/utils/supabase/queries';
import {
  BanknotesIcon,
  UserIcon,
  UserGroupIcon,
  FlagIcon
} from '@heroicons/react/24/outline';
import { lusitana } from '@/components/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserIcon,
  flagged: FlagIcon,
  renters: UserGroupIcon
};

export default async function CardWrapper() {
  const {
    numberOfRenters,
    numberOfCustomers,
    totalFlaggedRenters,
    totalCollectedRenters
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={totalCollectedRenters} type="collected" />
      <Card title="Flagged" value={totalFlaggedRenters} type="flagged" />
      <Card title="Total Renters" value={numberOfRenters} type="renters" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type
}: {
  title: string;
  value: number | string;
  type: 'renters' | 'customers' | 'flagged' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

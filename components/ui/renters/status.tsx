import { CheckIcon, ClockIcon, FlagIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function RenterStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-pink-500 text-white': status === 'flagged',
          'bg-green-500 text-white': status === 'paid'
        }
      )}
    >
      {status === 'pending' ? (
        <>
          pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'flagged' ? (
        <>
          flagged
          <FlagIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}

import { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import SideNav from '@/components/ui/dashboard/sidenav';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';

const title = 'Rental Suscription';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

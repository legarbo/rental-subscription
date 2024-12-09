import { Metadata } from 'next';
import { inter } from '@/components/ui/fonts';
import Footer from '@/components/ui/Footer';
import { Toaster } from '@/components/ui/Toasts/toaster';
import Navbar from '@/components/ui/Navbar';
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
      <body className="{`${inter.className} antialiased`} >{children">
        <Navbar />
        <main
          id="skip"
          className="md:min-h[calc(100dvh-5rem)] min-h-[calc(100dvh-4rem)]"
        >
          {children}
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}

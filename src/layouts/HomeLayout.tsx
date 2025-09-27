import { ReactNode } from 'react';
import Navbar from '@/components/sections/navbar/Navbar';
import Footer from '@/components/sections/footer/Footer';

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={'flex min-h-svh flex-col'}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

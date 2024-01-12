'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import whiteLogo from './assets/white-logo.png';
import greenLogo from './assets/green-logo.png';
import Image from 'next/image';
import MobileNavBar from './mobile-nav-bar';
import NavBar from './nav-bar';

export interface navBarLink {
  title: string;
  href: string;
}

const links: navBarLink[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' }
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        'flex justify-between items-center px-10  h-[10vh] w-screen',
        { 'lg:absolute lg:z-50': pathname === '/' }
      )}
    >
      <Image className="h-[8vh] w-auto " src={greenLogo} alt="Hopf logo" />

      <div className="lg:hidden">
        <MobileNavBar links={links} />
      </div>
      <div className="hidden lg:block">
        <NavBar links={links} />
      </div>
    </header>
  );
};

export default Header;

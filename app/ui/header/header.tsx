'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import whiteLogo from './assets/white-logo.png';
import greenLogo from './assets/green-logo.png';
import Image from 'next/image';

const links = [
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
        { 'absolute z-50': pathname === '/' }
      )}
    >
      <Image className="h-[8vh] w-auto " src={greenLogo} alt="Hopf logo" />
      <nav>
        {links.map(link => {
          return (
            <Link
              className={clsx('mx-2 tracking-widest', {
                'underline underline-offset-8 decoration-2 decoration-green-400':
                  pathname === link.href
              })}
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

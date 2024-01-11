'use client';
import Link from 'next/link';
import styles from './header.module.css';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'home', href: '/' },
  { title: 'about', href: '/about' },
  { title: 'projects', href: '/projects' }
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center mx-2 h-[10vh] w-screen absolute">
      <h1 className="text-green-400 text-2xl ml-10">André Hopf</h1>
      <nav>
        {links.map(link => {
          return (
            <Link
              className={clsx('mx-2', {
                'underline decoration-2 decoration-green-400':
                  pathname === link.href
              })}
              key={link.title}
              href={link.href}
            >
              {link.title.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

import clsx from 'clsx';
import { useState } from 'react';
import { navBarLink } from './header';
import Link from 'next/link';
import styles from './mobile-nav-bar.module.css';

const MobileNavBar = ({ links }: { links: navBarLink[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const openMenu = `${styles.toggle} ${styles.open}`;
  const closedMenu = styles.toggle;

  return (
    <nav className="lg:hidden">
      <button
        onClick={handleToggleMobileMenu}
        className={isMobileMenuOpen ? openMenu : closedMenu}
        type="button"
        data-bs-target="#basic-navbar-nav"
        aria-controls="basic-navbar-nav"
        aria-label="Toggle navigation"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul
        className={clsx(
          'absolute z-50 top-[10vh] h-[90vh] 100vw ease-in-out duration-700',
          {
            '-left-[100vh] bg-transparent': !isMobileMenuOpen,
            'left-0 right-0 bg-black': isMobileMenuOpen
          }
        )}
      >
        {links.map(link => {
          return (
            <Link
              onClick={handleToggleMobileMenu}
              className="block text-center hover:text-green-400 text-2xl"
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavBar;

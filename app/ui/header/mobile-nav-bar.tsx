import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ x: '-100vw' }}
            className={clsx(
              'absolute z-50 top-[10vh] h-[50vh] pt-4 bg-[#101010] left-0 right-0'
            )}
          >
            {links.map(link => {
              return (
                <Link
                  onClick={handleToggleMobileMenu}
                  className="block text-center hover:text-green-400 text-2xl h-12"
                  key={link.title}
                  href={link.href}
                >
                  {link.title}
                </Link>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavBar;

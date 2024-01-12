import { usePathname } from 'next/navigation';
import { navBarLink } from './header';
import clsx from 'clsx';
import Link from 'next/link';

const NavBar = ({ links }: { links: navBarLink[] }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul>
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
      </ul>
    </nav>
  );
};

export default NavBar;

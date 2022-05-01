import React from 'react';
import { useRouter } from 'next/router';

import { NavBtn } from './';

const leftLinks = [
  {
    as: 'tasks',
    href: '/tasks',
  },
  {
    as: 'tables',
    href: '/workstations',
  },
];
const rightLinks = [
  {
    as: 'users',
    href: '/users',
  },
  {
    as: 'inv.',
    href: '/inventory',
  },
];

export const Nav = props => {
  const router = useRouter();

  return (
    <>
      <footer>
        <nav className="nav_main">
          <div className="links_left">
            <>
              {leftLinks.map((l, i) => (
                <NavBtn key={`${l.as}${i}`} as={l.as} href={l.href} />
              ))}
            </>
          </div>

          <div className="link_home">
            <NavBtn exact={true} as={'home'} href={'/'} />
          </div>

          <div className="links_right">
            <>
              {rightLinks.map((l, i) => (
                <NavBtn key={`${l.as}${i}`} as={l.as} href={l.href} />
              ))}
            </>
          </div>
        </nav>
      </footer>

      <style jsx>
        {`
          .nav_main {
            height: 3rem;

            display: grid;
            grid-template: 'left home right' 1fr / 1fr auto 1fr;
            gap: 1rem;
          }

          .link_home {
            width: calc(3rem + 2px);
          }

          .links_left,
          .links_right {
            padding: 0 1.5rem;

            display: flex;
            gap: 0.75rem;
          }

          .links_right {
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  );
};

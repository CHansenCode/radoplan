import { NavBtn } from './NavBtn';

export const Navigation = props => {
  return (
    <>
      <footer className="nav_wrapper">
        <nav>
          {navLinks.map((n, i) => (
            <NavBtn key={n.as} as={n.as} href={n.href} />
          ))}
        </nav>
      </footer>

      <style jsx>
        {`
          .nav_wrapper {
            height: 3rem;
            width: 100%;
          }
          .nav_wrapper nav {
            height: 100%;
            width: 100%;

            display: flex;
            align-content: center;
            gap: 1rem;
          }
        `}
      </style>
    </>
  );
};

const navLinks = [
  {
    as: 'tasks',
    href: '/tasks',
  },
  {
    as: 'tables',
    href: '/workstations',
  },
  {
    as: 'users',
    href: '/users',
  },
  {
    as: 'inv.',
    href: '/inventory',
  },
];

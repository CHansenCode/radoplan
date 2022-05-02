import { NavLink, ButtonStyle } from './';

export const Navigation = props => {
  return (
    <>
      <footer className="nav_wrapper">
        <nav>
          <NavLink href="/tasks">
            <ButtonStyle type="tasks" />
          </NavLink>

          <NavLink href="/workstations">
            <ButtonStyle type="workstations" />
          </NavLink>

          <NavLink href="/users">
            <ButtonStyle type="users" />
          </NavLink>

          <NavLink href="/inventory">
            <ButtonStyle type="inventory" />
          </NavLink>
        </nav>
      </footer>

      <style jsx>
        {`
          .nav_wrapper {
            height: 4rem;
            width: 100%;
          }
          .nav_wrapper nav {
            height: 100%;
            width: 100%;

            display: flex;
            justify-content: center;
            gap: 1.5rem;
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

import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavBtn = props => {
  const { pathname } = useRouter();

  let exact = props.exact ? true : false;

  const isActive = exact
    ? pathname === props.href
    : pathname.startsWith(props.href);

  return (
    <>
      <Link href={props.href}>
        <a>
          <button className="nav_button">{props.as}</button>
        </a>
      </Link>

      <style jsx>
        {`
          .nav_button {
            height: 3rem;
            width: 3rem;

            border: thin solid rgba(0, 0, 0, 0.3);
            border-radius: 50%;

            outline: thin solid rgba(0, 0, 0, 0.2);
            outline-offset: 2px;

            color: currentColor;
            box-shadow: ${isActive
              ? 'inset 0.2rem 0.2rem 0.75rem -0.2rem black'
              : 'inset 0 0 0 0 black'};

            cursor: pointer;
            transition: 0.2s ease;
          }

          .nav_button:hover {
            color: green;
            box-shadow: inset 0.25rem 0.25rem 0.75rem -0.25rem black,
              inset -0.15rem -0.15rem 0.5rem -0.5rem black;
          }
        `}
      </style>
    </>
  );
};

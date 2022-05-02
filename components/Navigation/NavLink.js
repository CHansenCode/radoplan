import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = props => {
  const { pathname } = useRouter();

  let exact = props.exact ? true : false;

  const isActive = exact
    ? pathname === props.href
    : pathname.startsWith(props.href);

  return (
    <>
      <Link href={props.href}>
        <a className="pc pc-b">
          {React.Children.map(props.children, child => {
            return React.cloneElement(child, {
              isActive: isActive,
              ...props,
            });
          })}
        </a>
      </Link>

      <style jsx>{``}</style>
    </>
  );
};

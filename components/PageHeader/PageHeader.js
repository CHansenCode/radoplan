import { useRouter } from 'next/router';

import { Logo } from 'components';

export const PageHeader = () => {
  const router = useRouter();

  return (
    <>
      <header id="pages_header">
        <Logo height="3rem" />
        <h3>{router.pathname.substring(1)}</h3>
      </header>

      <style jsx>
        {`
          #pages_header {
            display: flex;
            align-content: center;
            gap: 1.5rem;

            margin-bottom: 1rem;
          }
          #pages_header h3 {
            font-size: 1.3rem;

            text-transform: uppercase;
            letter-spacing: 2px;

            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

import Head from 'next/head';

import { Nav } from './Nav';
import { Map } from 'components';

// import { GlobalStyles, Main, Meta, Nav, Dashboard } from './';

export const Layout = ({ ...props }) => {
  return (
    <>
      <Head>
        <title>Radoplan</title>
        <meta name="description" content="Production planning excellence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main_layout_container">
        <div className="main_layout_pages">
          <div className="pages">{props.children}</div>

          <Nav />
        </div>

        <div className="main_layout_svg_map">
          <Map data={props.data} />
        </div>
      </main>

      <style jsx>
        {`
          .main_layout_container {
            position: relative;
            height: 100vh;
            width: 100vw;

            display: grid;
            grid-template: 'page chart' 1fr / 1fr 1.5fr;
          }

          .main_layout_svg_map {
            height: 100%;
            width: 100%;

            padding: 1rem;

            border-left: thin solid teal;
            box-shadow: inset 0 0 2rem -1rem black;
          }

          .main_layout_pages {
            height: 100%;
            width: 100%;

            padding: 1rem;

            display: grid;
            grid-template:
              'pages' 1fr
              'nav' auto / 1fr;
            gap: 1.5rem;
          }

          .pages {
            height: 100%;
            width: 100%;

            padding: 1rem;

            border: thin solid rgba(0, 0, 0, 0.1);
            border-radius: 1rem;
            box-shadow: inset 0 0 1rem -0.5rem rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </>
  );
};

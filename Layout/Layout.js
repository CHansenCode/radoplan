import { Map, PageHeader, Navigation } from 'components';
import { GlobalColors } from './GlobalStyles';

// import { GlobalStyles, Main, Meta, Nav, Dashboard } from './';

export const Layout = ({ ...props }) => {
  return (
    <>
      <main id="main_container">
        <aside className="content_container">
          <PageHeader />

          <div className="pages_wrapper">
            <>{props.children}</>
          </div>

          <Navigation />
        </aside>

        <aside className="map_container">
          <Map data={props.data} />
        </aside>
      </main>

      <GlobalColors />

      <style jsx>
        {`
          #main_container {
            position: relative;
            height: 100vh;
            width: 100vw;

            display: grid;
            grid-template: 'page chart' 1fr / 1fr 1.5fr;
          }

          #main_container .content_container {
            height: 100%;
            width: 100%;

            padding: 1.5rem 2rem;

            display: grid;
            grid-template:
              'pageHeader' 4rem
              'pages' 1fr
              'navigation' 4rem / 1fr;
            gap: 2rem;
          }

          #main_container .content_container .pages_wrapper {
            position: relative;
            height: 100%;
            width: 100%;

            padding: 1rem;

            border: thin solid rgba(0, 0, 0, 0.1);
            border-radius: 0.5rem;

            box-shadow: 0 0 2rem -0.3rem rgba(0, 0, 0, 0.2);
          }

          #main_container .map_container {
            position: relative;
            height: 100%;
            width: 100%;

            box-shadow: inset 0 0 2rem -1rem black;
          }
        `}
      </style>
    </>
  );
};

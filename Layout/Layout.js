import { Map } from 'components';

// import { GlobalStyles, Main, Meta, Nav, Dashboard } from './';

export const Layout = ({ ...props }) => {
  return (
    <>
      {/* <Meta {...props} />
      <GlobalStyles {...props} /> */}

      <main className="main_layout_container">
        <>{props.children}</>

        <div className="main_layout_svg_map">
          <Map />
        </div>
      </main>

      {/* <Main {...props} /> */}

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
        `}
      </style>
    </>
  );
};

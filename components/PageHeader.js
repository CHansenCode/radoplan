import React from 'react';

export const PageHeader = ({ title, children }) => {
  return (
    <>
      <header className="generic_pageHeader">
        <h3>{title ? title : 'no title!'}</h3>
        <div className="hori_spacer" />
        <div>{children}</div>
      </header>

      <style jsx>
        {`
          .generic_pageHeader {
            display: grid;
            grid-template: 'title spacer controller' 1fr / 10rem 1fr auto;
            align-items: center;

            border: thin solid;

            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
};

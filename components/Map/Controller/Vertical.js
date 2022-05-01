import React from 'react';

export const Vertical = () => {
  return (
    <>
      <div className="vertical_bar">Vertical</div>

      <style jsx>
        {`
          .vertical_bar {
            height: 100%;
            border: thin solid green;
          }
        `}
      </style>
    </>
  );
};

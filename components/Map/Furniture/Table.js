import React from 'react';

export const Table = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 3600 900"
      >
        <g className="map_tables"></g>
      </svg>

      <style jsx>
        {`
          .map_tables {
            color: currentColor;
          }
        `}
      </style>
    </>
  );
};

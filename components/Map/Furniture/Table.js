import React from 'react';

export const Table = ({ height, width, xDif, yDif }) => {
  //

  xDif = xDif ? xDif : 1000;
  yDif = yDif ? yDif : 1000;

  height = height ? height : 900;
  width = width ? width : 1600;

  return (
    <>
      <rect
        className="map_table_chair"
        x={xDif + width / 2 - 200}
        y={yDif - 400}
        height={450}
        width={400}
      />
      <rect
        className="map_tables"
        x={xDif}
        y={yDif}
        height={height}
        width={width}
      />

      <style jsx>
        {`
          .map_tables {
            color: currentColor;
            fill: white;
            stroke: black;

            stroke-width: 4px;
          }
          .map_table_chair {
            fill: transparent;
            stroke: black;

            stroke-width: 4px;
          }
        `}
      </style>
    </>
  );
};

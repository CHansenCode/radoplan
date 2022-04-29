import React, { useState } from 'react';

import { Table } from './Furniture';
import { Controller } from './Controller';

import css from './Map.module.scss';

export const Map = ({ data }) => {
  const [furniture, setFurniture] = useState([
    {
      type: 'table',
      xDis: 1000,
      yDis: 1000,
    },
  ]);

  return (
    <>
      <div className="map_wrapper">
        <TopBar />
        <Controller />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          viewBox="0 0 10000 8000"
          className="main_map"
        >
          <Table />

          <path d="M457.5,389.6V529.4h-14V464H367.7v65.4h-14V389.6h14v62.8h75.8V389.6Z" />

          <>
            {data.deskData.map((d, i) => (
              <path
                d="M457.5,389.6V529.4h-14V464H367.7v65.4h-14V389.6h14v62.8h75.8V389.6Z"
                key={`table${i}`}
                data={d}
              />
            ))}
          </>
        </svg>
      </div>

      <style jsx>
        {`
          .map_wrapper {
            position: relative;
            padding: 1rem;
            height: 100%;
            width: 100%;
            border: thin solid purple;

            display: flex;
            align-items: center;
            justify-content: center;
          }
          .main_map {
            height: 100%;
            maxheight: 90vh;
            width: 100%;
            maxwidth: 40vw;

            border: thin solid red;

            background: rgba(0, 100, 100, 0.05);
          }
        `}
      </style>
    </>
  );
};

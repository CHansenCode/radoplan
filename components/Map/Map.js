import React from 'react';

import css from './Map.module.scss';

export const Map = ({ data }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 3600 900"
        className="main_map"
      >
        <></>

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

      <style jsx>
        {`
          .main_map {
            position: relative;
            height: 100%;
            width: 100%;

            border: thin solid red;

            background: rgba(0, 100, 100, 0.05);
          }
        `}
      </style>
    </>
  );
};

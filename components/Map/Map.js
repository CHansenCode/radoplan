import React from 'react';

import css from './Map.module.scss';

export const Map = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="main_map">
        {data.deskData.map((d, i) => (
          <Table data={d} />
        ))}
      </div>

      <style jsx>
        {`
          .main_map {
            position: relative;
            height: 100%;
            width: 100%;

            background: rgba(0, 100, 100, 0.1);
          }
        `}
      </style>
    </>
  );
};

const Table = ({ data }) => {
  return (
    <>
      <div className="map_table">
        <div className="map_table_inner">
          <h4>{data.number}</h4>

          <div className="map_table_chair">
            <div></div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .map_table {
            position: absolute;
            top: ${data.top};
            left: ${data.left};

            height: 3rem;
            width: 6rem;

            display: flex;
            align-items: center;
            justify-content: center;

            background: white;

            border: thin solid;
            box-shadow: 0 0 1rem -0.5rem black;

            transform: rotate(${data.rotation}deg);
          }
          .map_table_inner {
            position: relative;
            height: 100%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
          .map_table_inner h4 {
            transform: rotate(${data.rotation}deg);
          }
          .map_table_chair {
            position: absolute;
            top: calc(100% + 1px);
            height: 1.5rem;
            width: 1.5rem;

            border: thin solid;
            border-bottom: none;

            background: white;

            transform: rotate(180deg);
          }
          .map_table_chair div {
            height: 15%;
            width: 100%;

            border-bottom: thin solid;
          }
        `}
      </style>
    </>
  );
};

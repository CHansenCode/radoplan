import React, { useState } from 'react';

import { Table } from './Furniture';
import { Horizontal, Vertical } from './Controller';

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
      <div className="main_container">
        <div></div>
        <div style={{ gridArea: 'topbar' }}>
          <Horizontal />
        </div>

        <Vertical />

        <div className="map_wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 20000 16000"
            className="main_map"
          >
            {/* <title>Production map</title> */}

            <defs>
              <marker
                id="dot_poly"
                viewBox="0 0 50 50"
                refX="25"
                refY="25"
                markerWidth="50"
                markerHeight="50"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                  fill="teal"
                  stroke="none"
                  strokeWidth="0px"
                />
              </marker>

              <pattern
                id="straight_lines"
                viewBox="0,0,100,100"
                height="10%"
                width="10%"
                stroke="black"
                strokeWidth="1px"
              >
                <line x1={10} y1={0} x2={10} y2={100} />
                <line x1={30} y1={0} x2={30} y2={100} />
                <line x1={50} y1={0} x2={50} y2={100} />
                <line x1={70} y1={0} x2={70} y2={100} />
                <line x1={90} y1={0} x2={90} y2={100} />
              </pattern>
            </defs>

            <Table />
            <Table />

            <line
              x1={5000}
              y1={1000}
              x2={12000}
              y2={8000}
              stroke="black"
              strokeWidth="20px"
            />

            <polyline
              points={`
              1000,4000
              2000,3000
              3000,6000
              4000,3000
              5000,10000
              `}
              fill="transparent"
              stroke="black"
              strokeWidth="3px"
              markerStart="url(#dot_poly)"
              markerMid="url(#dot_poly)"
              markerEnd="url(#dot_poly)"
            />

            <rect
              x={2000}
              y={4000}
              height={4000}
              width={4000}
              fill="url(#straight_lines)"
              stroke="purple"
              strokeWidth={50}
            />

            <circle
              cx={10000}
              cy={8000}
              r={1000}
              stroke="teal"
              fill="none"
              strokeWidth="15px"
            />

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
      </div>

      <style jsx>
        {`
          .main_container {
            position: relative;
            padding: 1rem;
            height: 100%;
            width: 100%;

            display: grid;
            grid-template:
              '. topbar' 2rem
              'sidebar mapWindow' 1fr / 2rem 1fr;

            align-items: center;
            justify-content: center;
          }

          .map_wrapper {
            height: 100%;
            width: 100%;
          }

          .main_map {
            height: 100%;
            width: 100%;
            background: rgba(0, 100, 100, 0.05);
          }
        `}
      </style>
    </>
  );
};

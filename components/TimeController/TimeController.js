import { useState } from 'react';

export const TimeController = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Arrow size="0.75rem" rotate={90} />
      <h4 style={{ margin: '0 1rem' }}>somethign in between</h4>
      <Arrow size="0.75rem" rotate={270} />
    </div>
  );
};

const Arrow = ({ size, rotate }) => {
  return (
    <>
      <div className="arrow_container">
        <div className="div_styled_arrow" />
      </div>

      <style jsx>
        {`
          .arrow_container {
            height: ${size};
            width: ${size};

            border: thin dashed teal;
          }
          .div_styled_arrow {
            width: 0;
            height: 0;

            border-left: ${size} solid transparent;
            border-right: ${size} solid transparent;
            border-top: ${size} solid teal;

            transform: rotate(${rotate ? rotate : 0}deg);
          }
        `}
      </style>
    </>
  );
};

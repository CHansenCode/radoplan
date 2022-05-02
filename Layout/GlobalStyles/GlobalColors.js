export const GlobalColors = () => {
  return (
    <>
      <style jsx global>
        {`
          .pc {
            color: rgb(60, 190, 75);
          }
          .pc-bg {
            background: rgb(60, 190, 75);
          }
          .pc-b {
            border-color: rgb(60, 190, 75) !important;
          }
        `}
      </style>
    </>
  );
};

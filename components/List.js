export const List = props => {
  return (
    <>
      <ul className="generic_list">{props.children}</ul>

      <style jsx>
        {`
          .generic_list {
            color: teal;

            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
        `}
      </style>
    </>
  );
};

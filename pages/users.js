import { PageHeader, List } from 'components';

export default function Users(props) {
  console.log(props);

  return (
    <>
      <div>
        <PageHeader title="Workers">
          <div>
            {`< `}
            {`today`}
            {` >`}
          </div>
        </PageHeader>

        <UserList>
          <Legend></Legend>
          {props.data.userData.map((u, i) => (
            <UserCard key={`user${i}`} data={u} />
          ))}
        </UserList>
      </div>

      <style jsx>
        {`
          .users_page_header {
            display: grid;
            grid-template: 'pagetitle counter' 1fr / 1fr auto;
          }
        `}
      </style>
    </>
  );
}

const UserList = props => {
  return (
    <>
      <ul className="user_list">{props.children}</ul>

      <style jsx>
        {`
          .user_list {
            padding: 0.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
        `}
      </style>
    </>
  );
};

const Legend = props => {
  return (
    <>
      <div className="list_legend">
        <h5>name :</h5>
        <h5>for :</h5>
        <h5>efter :</h5>
      </div>

      <style jsx>
        {`
          .list_legend {
            display: grid;
            grid-template: 'name for efter' 1fr / 1fr auto auto;
            gap: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

const UserCard = ({ data }) => {
  return (
    <>
      <div className="user_card">
        <h4>{data.name}</h4>

        <div>
          <button className="user_card_btn_formiddag">för</button>
          <button className="user_card_btn_formiddag">efter</button>
        </div>
      </div>

      <style jsx>
        {`
          .user_card {
            height: 2rem;
            width: 100%;

            border: thin solid rgba(0, 0, 0, 0.1);

            display: grid;
            grid-template: 'info btns' 1fr / 1fr auto;
          }
        `}
      </style>
    </>
  );
};

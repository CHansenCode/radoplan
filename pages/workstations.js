import { PageHeader, List } from 'components';

export default function Workstations(props) {
  return (
    <>
      <div>
        <List>
          {props.data.deskData.map((d, i) => (
            <WorkstationItem key={`${i}${d.number}`} data={d} />
          ))}
        </List>
      </div>
    </>
  );
}

const WorkstationItem = ({ data }) => {
  return (
    <>
      <li className="workstation_item">
        <div>
          <h6>nr.</h6>
          {data.number}
        </div>
        <select type="select">
          <option>cow</option>
        </select>
      </li>

      <style jsx>
        {`
          .workstation_item {
            display: grid;
            grid-template: 'nr input' 1fr / 4rem 1fr;
            gap: 0.25rem;
          }
          .workstation_item > * {
            display: flex;
            align-items: flex-end;
          }
        `}
      </style>
    </>
  );
};

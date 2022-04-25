import { PageHeader, TimeController } from 'components';

export default function Inventory(props) {
  console.log(props);

  return (
    <div>
      <PageHeader title="Inventory">
        <TimeController />
      </PageHeader>

      <InventoryLegend />
      <InventoryList>
        {props.data.invData.map((d, i) => (
          <InventoryItem key={`${d.stockIndex}`} data={d} />
        ))}
      </InventoryList>
    </div>
  );
}

const InventoryList = props => {
  return (
    <>
      <ul className="inventory_list">
        <>{props.children}</>
      </ul>

      <style jsx>
        {`
          .inventory_list {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
        `}
      </style>
    </>
  );
};

const InventoryLegend = () => {
  return (
    <>
      <li className="inventory_legend pc">
        <h5>{`name`}</h5>
        <h5>{`#`}</h5>
        <h5>{`res`}</h5>
      </li>

      <style jsx>
        {`
          .inventory_legend {
            display: grid;
            grid-template: 'name amount reserved' 1fr / 1fr 1.5rem 1.5rem;
            align-items: center;
            gap: 1rem;
            padding: 0 1rem 0 0.5rem;
          }
        `}
      </style>
    </>
  );
};

const InventoryItem = ({ data }) => {
  return (
    <>
      <li className="inventory_item pc">
        <p>{data.name}</p>
        <h5>{data.amount}</h5>
        <h5>{data.reserved}</h5>
      </li>

      <style jsx>
        {`
          .inventory_item {
            border: thin solid;

            display: grid;
            grid-template: 'name amount reserved' 1fr / 1fr 1.5rem 1.5rem;
            align-items: center;
            gap: 1rem;
            padding: 0 1rem 0 0.5rem;
          }
          .inventory_item h5 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

import { PageHeader, List } from 'components';

export default function Tasks() {
  return (
    <div>
      <PageHeader title="Tasks">
        <div>
          {`< `}
          {`today`}
          {` >`}
        </div>
      </PageHeader>

      <div>tasks</div>
    </div>
  );
}

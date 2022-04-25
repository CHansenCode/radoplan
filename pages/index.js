import { PageHeader, List } from 'components';

export default function Home() {
  return (
    <div>
      <PageHeader title="Statistics">
        <div>
          {`< `}
          {`today`}
          {` >`}
        </div>
      </PageHeader>

      <div>
        <div>
          <h4>title: </h4>
          <h5>Something was made</h5>
        </div>
      </div>
    </div>
  );
}

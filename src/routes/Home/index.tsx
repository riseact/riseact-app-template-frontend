import useOrganizationInfo from '@hooks/useOrganization';
import { Card, Loading, PageContainer, PageTitle } from '@riseact/elements';
import { Case, Default, Switch } from 'react-if';

const Home = () => {
  const { data, loading, error } = useOrganizationInfo();

  return (
    <PageContainer>
      <PageTitle
        title="Welcome to your first Riseact App"
        subtitle="React framework for building Riseact Apps"
      />

      <Switch>
        <Case condition={loading}>
          <Loading />
        </Case>
        <Case condition={!!error}>
          <Card title="Error">
            There was an error while fetching the data. Please try again later.
          </Card>
        </Case>
        <Default>
          <Card title="A short mini-guide to create Riseact Apps">
            Welcome <strong>{data?.name}!</strong>👋
            <br />
            This is your first Riseact App!
            <br />
            Your name was queried from the GQL client from your backend, via the private api
            /api/organization-info
            <br />
            Go to the <strong>Campaigns</strong> tab to test the queries directly from the client.
          </Card>
        </Default>
      </Switch>
    </PageContainer>
  );
};

export default Home;

import { gql, useQuery } from '@apollo/client';
import { OrganizationInfoQueryResponse } from '@common/types';

const ORGANIZATION_INFO_QUERY = gql`
  query GetOrganizationInfo {
    organization {
      name
      logo {
        square
      }
    }
    user {
      name
    }
  }
`;

function OrganizationInfo() {
  const { data, loading, error } = useQuery<OrganizationInfoQueryResponse>(ORGANIZATION_INFO_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error || !data) {
    return <div>Ops! An error occurred during the request</div>;
  }

  return (
    <div className="organization-info">
      {data.organization.logo && (
        <img
          className="organization-logo"
          src={data.organization.logo.square}
          alt="Organization logo"
        />
      )}
      <p>
        Welcome <strong>{data.user.name}</strong> from <strong>{data.organization.name}</strong> 👋
      </p>
    </div>
  );
}

export default OrganizationInfo;

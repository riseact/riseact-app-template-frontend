import { useQuery } from '@apollo/client';
import { ORGANIZATION_INFO_QUERY } from '@common/queries';
import { OrganizationInfoResponseQuery } from '@common/types';

function OrganizationInfo() {
  const { data, loading, error } = useQuery<OrganizationInfoResponseQuery>(ORGANIZATION_INFO_QUERY);

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

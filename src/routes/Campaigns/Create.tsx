import { useMutation } from '@apollo/client';
import { graphql } from '@common/gql';
import { CampaignInput, UserError } from '@common/gql/graphql';
import { PageContainer, PageTitle } from '@riseact/elements';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import ROUTE from '@config/routing';

const CAMPAIGN_CREATE_MUTATION = graphql(`
  mutation CampaignCreate($data: CampaignInput!) {
    campaignCreate(data: $data) {
      campaign {
        id
        title
        type
        content
        note
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`);

const Create: FC = () => {
  const navigate = useNavigate();

  const [campaignCreate, { loading }] = useMutation(CAMPAIGN_CREATE_MUTATION);

  const handleSubmit = async (data: CampaignInput): Promise<UserError[] | undefined> => {
    try {
      const response = await campaignCreate({ variables: { data } });
      if (response.data) {
        const { campaign, userErrors } = response.data.campaignCreate;

        if (userErrors) {
          return userErrors;
        } else if (campaign) {
          // toast.success(`${t('Campaign')} ${data.title} ${t('created successfully')}`);
          navigate(ROUTE.CAMPAIGNS_DETAIL.replace(":id", campaign.id.toString()));
        }
      }
    } catch (error) {
      console.error(error);
      // toast.error(getErrorString(error));
    }
  };

  return (
    <PageContainer contained>
      <PageTitle title="Create campaign" goBack={() => navigate(ROUTE.CAMPAIGNS)} />
      <Form onSubmit={handleSubmit} isSaveLoading={loading} />
    </PageContainer>
  );
};

export default Create;

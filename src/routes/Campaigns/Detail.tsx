import { PageContainer, PageTitle, ActionMenu, Loading } from '@riseact/elements';
import { FC } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsCode } from 'react-icons/bs';
import { HiQrcode } from 'react-icons/hi';
import Form from './Form';
import { CAMPAIGN_DETAILS_QUERY, CAMPAIGN_UPDATE_MUTATION } from '@common/queries';
import { useMutation, useQuery } from '@apollo/client';
import { CampaignInput, UserError } from '@common/gql/graphql';

const Detail: FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { loading, data } = useQuery(CAMPAIGN_DETAILS_QUERY, {
    variables: { campaignId: parseInt(params.id!) },
  });

  const [campaignUpdate, { loading: isUpdating }] = useMutation(CAMPAIGN_UPDATE_MUTATION, {
    refetchQueries: ['Campaign'],
  });

  const handleUpdate = async (values: CampaignInput): Promise<UserError[] | undefined> => {
    if (!data?.campaign) {
      return;
    }

    try {
      const response = await campaignUpdate({
        variables: {
          id: data.campaign.id,
          data: values,
        },
      });

      if (response.data) {
        const { campaign, userErrors } = response.data.campaignUpdate;

        if (campaign) {
          // toast.success(`Campaign ${campaign.title} updated successfully`);
        } else if (userErrors) {
          return userErrors;
        }
      }
    } catch (error) {
      // toast.error();
    }
  };

  if (loading || !data) return <Loading />;

  return (
    <PageContainer contained>
      <PageTitle title="Campaign details" subtitle="A short mini-guide to create Riseact Apps">
        <HStack spacing={4}>
          <ActionMenu
            mainButtonText="Actions"
            buttons={[
              {
                icon: <HiQrcode />,
                onClick: () => console.log('click on action 1'),
                label: 'Action 1',
              },
              {
                icon: <BsCode />,
                onClick: () => console.log('click on action 2'),
                label: 'Action 2',
              },
            ]}
          />
          <Button variant="solid" colorScheme="primary" onClick={() => console.log('click')}>
            Primary button
          </Button>
        </HStack>
      </PageTitle>

      <Form
        initialValues={{
          title: data?.campaign.title,
          content: data?.campaign.content,

          // todo remove
          channels: [],
          tags: [],
          costExamples: [],
        }}
        onSubmit={handleUpdate}
        isSaveLoading={isUpdating}
      />
    </PageContainer>
  );
};

export default Detail;

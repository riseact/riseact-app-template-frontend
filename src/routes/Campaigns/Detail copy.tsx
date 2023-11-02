import { Layout, Card, PageContainer, PageTitle, ActionMenu } from '@riseact/elements';
import { FC, useState } from 'react';
import { Button, HStack, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BsCode } from 'react-icons/bs';
import { HiQrcode } from 'react-icons/hi';
import ROUTE from '@config/routing';

const Detail: FC = () => {
  const navigate = useNavigate();
  const [radioValue, setRadioValue] = useState('first');

  const handleRadioChange = (value: string) => {
    setRadioValue(value);
  };

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
          <Button variant="solid" colorScheme="primary" onClick={() => navigate(ROUTE.CAMPAIGNS)}>
            Edit campaign
          </Button>
        </HStack>
      </PageTitle>
      <Layout>
        <Layout.Section>
          <VStack spacing={4}>
            <Card title="This is the main layout">The 2 columns are the main layout</Card>
            <Card title="This is the main layout">The 2 columns are the main layout</Card>
          </VStack>
        </Layout.Section>

        <Layout.Section secondary>
          <VStack spacing={4}>
            <Card
              title="Layout secondary"
              actions={[
                {
                  actionType: 'link',
                  label: 'Edit',
                  onClick: () => console.log('click'),
                },
              ]}
            >
              This is rendered aside of the main column. Put here secondary information
            </Card>

            <Card
              title="This is a card with a submenu"
              actions={[
                {
                  actionType: 'button',
                  label: 'Edit',
                  onClick: () => console.log('click'),
                },
              ]}
            >
              For each secondary card you can add a submenu, a link or a button
            </Card>

            <Card
              title="This is a card"
              actions={[
                {
                  actionType: 'submenu',
                  label: 'Edit',
                  subActions: [
                    {
                      actionType: 'link',
                      label: 'Edit',
                      onClick: () => console.log('click'),
                    },
                  ],
                },
              ]}
            >
              Secondary section is also useful for little radio buttons or checkboxes
              <RadioGroup onChange={handleRadioChange} value={radioValue} mt={4}>
                <VStack spacing={4} alignItems="start">
                  <Radio value="first">Option 1</Radio>
                  <Radio value="second">Option 2</Radio>
                </VStack>
              </RadioGroup>
            </Card>
          </VStack>
        </Layout.Section>
      </Layout>
    </PageContainer>
  );
};

export default Detail;

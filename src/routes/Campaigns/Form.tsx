import { Radio, RadioGroup, VStack } from '@chakra-ui/react';
import { CampaignInput, CampaignType, UserError, WebDocumentVisibility } from '@common/gql/graphql';
import { ActionButtons, Card, InputBox, Layout } from '@riseact/elements';
import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  initialValues?: CampaignInput;
  onSubmit: (values: CampaignInput) => Promise<UserError[] | undefined>;
  isSaveLoading: boolean;
}

const Form: FC<Props> = ({ initialValues, onSubmit, isSaveLoading }) => {
  const form = useForm<CampaignInput>({
    mode: 'onSubmit',
    resolver: yupResolver<CampaignInput>(schema),
    defaultValues: {
      visibility: WebDocumentVisibility.Published,
      type: CampaignType.Donation,

      // todo remove required
      channels: [],
      tags: [],
      costExamples: [],

      ...initialValues,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    control,
    formState: { isDirty, errors },
  } = form;

  const submit: SubmitHandler<CampaignInput> = async (values) => {
    const userErrors = await onSubmit(values);
    if (userErrors) {
      userErrors.map(
        (e) =>
          e.field &&
          setError(e.field as keyof CampaignInput, {
            type: 'custom',
            message: e.message || 'Cannot process this field',
          }),
      );
    } else {
      reset({}, { keepValues: true });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submit)}>
        <Layout title="Overview">
          <Layout.Section>
            <VStack spacing={4}>
              <Card>
                <VStack spacing={5}>
                  <InputBox label="Title" error={errors.title?.message} {...register('title')} />
                </VStack>
              </Card>
            </VStack>
          </Layout.Section>

          <Layout.Section secondary>
            <VStack spacing={4}>
              <Card title="Visibility">
                <Controller
                  name="visibility"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup onChange={field.onChange} value={field.value || undefined}>
                      <VStack spacing={4} alignItems="start">
                        <Radio value={WebDocumentVisibility.Published}>Visible</Radio>
                        <Radio value={WebDocumentVisibility.Unpublished}>Hidden</Radio>
                      </VStack>
                    </RadioGroup>
                  )}
                />
              </Card>

              <Card title="Type">
                <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup onChange={field.onChange} value={field.value || undefined}>
                      <VStack spacing={4} alignItems="start">
                        <Radio value={CampaignType.Donation}>Donations</Radio>
                        <Radio value={CampaignType.Lead}>Lead</Radio>
                      </VStack>
                    </RadioGroup>
                  )}
                />
              </Card>
            </VStack>
          </Layout.Section>
        </Layout>

        <ActionButtons
          onSave={handleSubmit(submit)}
          isSaving={isSaveLoading}
          isSavingDisabled={!isDirty}
        />
      </form>
    </FormProvider>
  );
};

const schema: yup.ObjectSchema<CampaignInput> = yup.object({
  title: yup.string().required('Title is required'),
  code: yup.string().nullable(),
  content: yup.string(),
  visibility: yup.mixed<WebDocumentVisibility>().oneOf(Object.values(WebDocumentVisibility)),
  formId: yup.number().integer(),
  isGoalEnabled: yup.boolean(),
  seoTitle: yup.string(),
  seoDescription: yup.string(),
  type: yup.mixed<CampaignType>().oneOf(Object.values(CampaignType)),
  coverId: yup.number().integer().nullable(),
  goal: yup.number().nullable(),
  allowPeerToPeer: yup.boolean(),
  slug: yup.string().nullable(),
  template: yup.string().nullable(),
  // todo remove required
  tags: yup.array().required(),
  channels: yup.array(yup.number().required()).required(),
  costExamples: yup
    .array(
      yup
        .object({
          amount: yup.number().required(),
          description: yup.string().required(),
          uuid: yup.string().required(),
        })
        .required(),
    )
    .required(),
});

export default Form;

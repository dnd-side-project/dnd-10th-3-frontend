import { DevTool } from '@hookform/devtools';
import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useIsMounted } from '@/hooks/useIsMounted';
import type { TestFormValue } from '@/types/test';

const CreateGoalFormProvider = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted();

  const methods = useForm<TestFormValue>();

  const submit = (data: TestFormValue) => {
    // TODO: 불필요한 submit이 호출되는 문제 해결 필요
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>

      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default CreateGoalFormProvider;

import { DevTool } from '@hookform/devtools';
import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useIsMounted } from '@/hooks/useIsMounted';
import type { TestFormValue } from '@/types/test';

const TestFormProvider = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted();

  const methods = useForm<TestFormValue>();

  const submit = (data: TestFormValue) => {
    console.log('data', data);
    // TODO: API와 연동 해야합니다.
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>

      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default TestFormProvider;

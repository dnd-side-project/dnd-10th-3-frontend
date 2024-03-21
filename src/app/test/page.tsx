import TestProvider from '@/contexts/test/TestProvider';

import TestForm from './_components/TestForm';

const TestPage = () => {
  return (
    <TestProvider>
      <TestForm />
    </TestProvider>
  );
};

export default TestPage;

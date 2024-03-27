import { TestsProvider } from '@/contexts/test/TestsProvider';

import TestForm from './_components/TestForm';

const TestPage = () => {
  return (
    <TestsProvider>
      <TestForm />
    </TestsProvider>
  );
};

export default TestPage;

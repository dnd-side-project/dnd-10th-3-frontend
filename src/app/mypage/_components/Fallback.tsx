import { Spinner } from '@/components/common/spinner';

const Fallback = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Fallback;

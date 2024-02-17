import { PropsWithChildren } from 'react';

const VoteItemGroup = ({
  children,
  withBlur = false,
}: PropsWithChildren & { withBlur?: boolean }) => {
  return (
    <div className="flex flex-col gap-5xs">
      <div className="relative flex flex-col gap-5xs ">
        {children}
        {withBlur && (
          <div
            className={`absolute bottom-0 left-0 z-10 h-[80%] w-full bg-gradient-to-t from-white`}
          />
        )}
      </div>
    </div>
  );
};

export default VoteItemGroup;

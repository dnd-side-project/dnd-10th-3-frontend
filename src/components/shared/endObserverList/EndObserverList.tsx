import { ComponentProps, forwardRef } from 'react';
import { InView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  onScrollEnd: () => void;
} & ComponentProps<'ul'>;

const EndObserverList = forwardRef<HTMLUListElement, Props>(
  ({ onScrollEnd, children, ...props }, ref) => {
    return (
      <ul {...props} ref={ref}>
        {children}
        <InView
          as="li"
          onChange={(inView) => {
            if (!inView) return;
            onScrollEnd();
          }}
        />
      </ul>
    );
  },
);
EndObserverList.displayName = 'EndObserverList';

export default EndObserverList;

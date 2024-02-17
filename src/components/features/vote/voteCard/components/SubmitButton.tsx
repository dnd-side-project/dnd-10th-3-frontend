import { PropsWithChildren } from 'react';

const SubmitButton = ({ children }: PropsWithChildren) => {
  return <div className="pt-3xs">{children}</div>;
};

export default SubmitButton;

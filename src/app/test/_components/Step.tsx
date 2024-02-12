type Props = {
  check: boolean;
  children: React.ReactNode;
};

const Step = ({ check, children }: Props) => {
  if (check === true) {
    return children;
  }
  return null;
};

export default Step;

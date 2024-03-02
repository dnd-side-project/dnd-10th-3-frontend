export type ErrorHandler = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => React.ReactNode;

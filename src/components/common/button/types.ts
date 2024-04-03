export type LoadingProps = {
  isLoading?: boolean;
};

export type IconProps =
  | {
      Icon?: React.ReactNode;
      iconSide?: 'left' | 'right';
      iconOnly?: false;
      children: React.ReactNode;
    }
  | {
      Icon: React.ReactNode;
      iconSide?: never;
      iconOnly: true;
      children?: never;
    };

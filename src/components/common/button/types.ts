export type LoadingProps = {
  isLoading?: boolean;
};

export type IconProps =
  | {
      icon?: string;
      iconSide?: 'left' | 'right';
      iconOnly?: false;
      children: React.ReactNode;
    }
  | {
      icon: string;
      iconSide?: never;
      iconOnly: true;
      children?: never;
    };

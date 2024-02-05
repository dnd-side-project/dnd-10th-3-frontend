import { IconType, iconMap } from './assets';

export type Props = {
  icon: IconType;
  size?: number;
  color?: keyof typeof COLORS;
} & Omit<React.SVGProps<SVGSVGElement>, 'color'>;

// TODO 디자인 상 아이콘 색깔이 통일되었을 때 재구성 필요
export const COLORS = {
  gray: '#9DA0A3',
  pink: '#FF91C6',
  black: '#151719',
  white: '#ffffff',
};

const Icon = ({ icon, size = 20, color = 'gray', ...props }: Props) => {
  const IconSVGComponent = iconMap[icon];

  return <IconSVGComponent width={size} height={size} color={COLORS[color]} {...props} />;
};

export default Icon;

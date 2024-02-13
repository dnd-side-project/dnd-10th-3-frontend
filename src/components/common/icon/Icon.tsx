import { COLORS, IconColor, IconType, iconMap } from './assets';

export type Props = {
  icon: IconType;
  size?: number;
  color: IconColor;
} & Omit<React.SVGProps<SVGSVGElement>, 'color'>;

const Icon = ({ icon, size = 20, color, ...props }: Props) => {
  const IconSVGComponent = iconMap[icon];

  return <IconSVGComponent width={size} height={size} color={COLORS[color]} {...props} />;
};

export default Icon;

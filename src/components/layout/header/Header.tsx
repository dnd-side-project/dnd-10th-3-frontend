import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import LogoImage from '@/assets/images/logo.png';
import { Icon } from '@/components/common/icon';
import { IconColor, IconType } from '@/components/common/icon/assets';
import { Typography } from '@/foundations/typography';
import { cn } from '@/lib/core';

import { Previous, ToggleNav } from './components';

type HeaderProps = { children: React.ReactNode } & HTMLAttributes<HTMLElement>;
const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'sticky bg-inherit top-0 z-50 h-[68px] flex w-full items-center justify-between py-3xs px-2xs',
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
};

const Logo = () => {
  return <Image src={LogoImage} width={50} height={20} alt="logo" priority />;
};

type IconLinkProps = {
  href: string;
  icon: IconType;
  iconColor?: IconColor;
};
const IconLink = ({ href, icon, iconColor = 'gray-300' }: IconLinkProps) => {
  return (
    <Link href={href}>
      <Icon icon={icon} color={iconColor} size={27} />
    </Link>
  );
};

type TextProps = {
  text: string;
};
const Text = ({ text }: TextProps) => {
  return <Typography type="body1">{text}</Typography>;
};

export default Object.assign(Header, {
  Logo,
  ToggleNav,
  Text,
  IconLink,
  Previous,
});

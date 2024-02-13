import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import LogoImage from '@/assets/images/logo.png';
import { Icon } from '@/components/common/icon';
import { IconColor, IconType } from '@/components/common/icon/assets';
import { cn } from '@/lib/core';

import { Previous, Tab } from './components';

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
      <Icon icon={icon} color={iconColor} size={32} />
    </Link>
  );
};

export default Object.assign(Header, {
  Logo,
  Tab,
  IconLink,
  Previous,
});

import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import LogoImage from '@/assets/images/logo.png';
import { Icon } from '@/components/common/icon';
import { IconType } from '@/components/common/icon/assets';
import { cn } from '@/lib/core';

import { Previous, Tab } from './components';

type HeaderProps = { children: React.ReactNode } & HTMLAttributes<HTMLElement>;
const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex w-full items-center justify-between px-xs pb-sm pt-xl',
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoImage} width={50} height={20} alt="logo" priority />
    </Link>
  );
};

type IconLinkProps = {
  href: string;
  icon: IconType;
};
const IconLink = ({ href, icon }: IconLinkProps) => {
  return (
    <Link href={href}>
      <Icon icon={icon} color="black" size={20} />
    </Link>
  );
};

export default Object.assign(Header, {
  Logo,
  Tab,
  IconLink,
  Previous,
});

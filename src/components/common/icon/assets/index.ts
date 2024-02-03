import ChevronLeft from './ChevronLeft';
import FilledHeart from './FilledHeart';
import Heart from './Heart';
import Kakaotalk from './Kakaotalk';
import Profile from './Profile';
import Reply from './Reply';
import Search from './Search';
import Submit from './Submit';
import User from './User';
import Votebox from './Votebox';

export const iconMap = {
  filledHeart: FilledHeart,
  heart: Heart,
  kakaotalk: Kakaotalk,
  profile: Profile,
  submit: Submit,
  user: User,
  search: Search,
  reply: Reply,
  chevronLeft: ChevronLeft,
  votebox: Votebox,
};

export type IconType = keyof typeof iconMap;
export const iconList = Object.keys(iconMap) as IconType[];

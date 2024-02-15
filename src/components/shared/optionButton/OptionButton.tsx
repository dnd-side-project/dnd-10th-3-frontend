import { HTMLAttributes } from 'react';

import { Icon } from '@/components/common/icon';

type Props = { option: string; isChecked: boolean } & HTMLAttributes<HTMLButtonElement>;

const OptionButton = ({ option, isChecked, ...props }: Props) => {
  return (
    <button className={'flex w-full p-3xs'} {...props}>
      <div className="w-full text-start text-gray-800">{option}</div>
      {isChecked && <Icon icon="check" color="primary-700" />}
    </button>
  );
};

export default OptionButton;

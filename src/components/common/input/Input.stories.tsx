import type { Meta, StoryObj } from '@storybook/react';

import { useInput } from '@/hooks/api/useInput';

import type { InputProps } from './Input';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'components/common/input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const Example = ({ className, icon, iconColor, iconSide, onSubmit }: InputProps) => {
  const { value, handleChange } = useInput('');

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder="Text Input"
      onSubmit={onSubmit}
      icon={icon}
      iconColor={iconColor}
      iconSide={iconSide}
      className={className}
    />
  );
};

export const Basic: Story = {
  render: () => <Example />,
};

export const SearchInput: Story = {
  render: () => <Example icon="search" iconSide="left" />,
};
export const RightIconInput: Story = {
  render: () => <Example icon="submit" iconSide="right" />,
};

export const DateInput: Story = {
  args: {
    type: 'date',
  },
};

export const TextOverflow: Story = {
  args: {
    value: '옹기종기3팀파이팅옹기종기3팀파이팅옹기종기3팀파이팅옹기종기3팀파이팅옹기종기3팀파이팅',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

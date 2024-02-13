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
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

const Example = ({
  variant,
  className,
  bgcolor,
  borderRadius,
  icon,
  iconColor,
  iconSide,
  onSubmit,
}: InputProps) => {
  const { value, handleChange } = useInput('');

  return (
    <Input
      bgcolor={bgcolor}
      variant={variant}
      value={value}
      borderRadius={borderRadius}
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
  render: () => <Example icon="search" iconSide="left" borderRadius="large" bgcolor="gray" />,
};

export const EmptyInput: Story = {
  render: () => <Example variant={'empty'} />,
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

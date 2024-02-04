import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta = {
  title: 'components/layout/header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-200">
        <div className="layout bg-white">
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const MainHeader: Story = {
  render: () => (
    <Header>
      <Header.Logo />
      <Header.Tab />
      <Header.IconLink href="/my-page" icon="user" />
    </Header>
  ),
};

export const MainHeaderWithoutTab: Story = {
  render: () => (
    <Header>
      <Header.Logo />
      <Header.IconLink href="/my-page" icon="user" />
    </Header>
  ),
};

export const PreviousOnly: Story = {
  render: () => (
    <Header>
      <Header.Previous />
    </Header>
  ),
};

export const PreviousAndSettings: Story = {
  render: () => (
    <Header>
      <Header.Previous />
      <Header.IconLink href="/my-page/settings" icon="settings" />
    </Header>
  ),
};

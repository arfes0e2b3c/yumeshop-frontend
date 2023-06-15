import { StoryObj, Meta } from '@storybook/react';
import { ItemCard } from '.';

const meta: Meta<typeof ItemCard> = {
  title: 'atoms/ItemCard',
  component: ItemCard,
};

export default meta;

type Story = StoryObj<typeof ItemCard>;
export const Default: Story = {
  args: {
    id: '57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    name: 'ボールペン',
    thumbnail: 'https://picsum.photos/id/1/300/300',
  },
};

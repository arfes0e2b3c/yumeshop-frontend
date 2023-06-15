import { StoryObj, Meta } from '@storybook/react';
import { ProductCard } from '.';

const meta: Meta<typeof ProductCard> = {
  title: 'atoms/ProductCard',
  component: ProductCard,
};

export default meta;

type Story = StoryObj<typeof ProductCard>;
export const Default: Story = {
  args: {
    path: '/detail/57c3ff77-d8bd-41bb-86e3-4526e1b2186c',
    name: 'ボールペン',
    thumbnail: 'https://picsum.photos/id/1/300/300',
  },
};

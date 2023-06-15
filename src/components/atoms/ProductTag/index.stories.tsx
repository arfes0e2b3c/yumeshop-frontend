import { StoryObj, Meta } from '@storybook/react';
import { ProductTag } from '.';

const meta: Meta<typeof ProductTag> = {
  title: 'atoms/ProductTag',
  component: ProductTag,
};

export default meta;

type Story = StoryObj<typeof ProductTag>;
export const Default: Story = {
  args: {
    path: '/tags/f43b4797-f9aa-01dc-6877-115b2a838ef9',
    name: '新商品',
    color: 'green',
  },
};

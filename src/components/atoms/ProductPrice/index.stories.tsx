import { StoryObj, Meta } from '@storybook/react';
import { ProductPrice } from '.';

const meta: Meta<typeof ProductPrice> = {
  title: 'atoms/ProductPrice',
  component: ProductPrice,
};

export default meta;

type Story = StoryObj<typeof ProductPrice>;
export const Discounted: Story = {
  args: {
    discounted: true,
    originalPrice: 1000,
    sellingPrice: 500,
  },
};

export const Normal: Story = {
  args: {
    discounted: false,
    originalPrice: 500,
    sellingPrice: 500,
  },
};

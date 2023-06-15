import { StoryObj, Meta } from '@storybook/react';
import { ProductPrice } from '.';

const meta: Meta<typeof ProductPrice> = {
  title: 'atoms/ProductPrice',
  component: ProductPrice,
};

export default meta;

type Story = StoryObj<typeof ProductPrice>;
export const Default: Story = {
  args: {
    discounted: true,
    originalPrice: 1000,
    sellingPrice: 500,
  },
};

import { FC } from 'react';
import { colors, fontSizes, fonts } from 'src/styles/Tokens';
import { tb } from 'src/styles/media';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: flex-end;
  column-gap: 8px;
  ${tb`
    column-gap: 4px;
  `}
`;

const TaxExcluded = styled.div`
  font-size: ${fontSizes.fontSize24};
  font-style: ${fonts.NotoSansJP};
  ${tb`
    font-size: ${fontSizes.fontSize14};
  `}
`;

const DiscountedOriginalPrice = styled.div`
  color: #aaa;
  font-size: ${fontSizes.fontSize24};
  font-style: ${fonts.Roboto};
  ${tb`
    font-size: ${fontSizes.fontSize14};
  `}
`;

const DiscountedSellingPrice = styled.div`
  color: ${colors.Red};
  font-size: ${fontSizes.fontSize36};
  font-style: ${fonts.Roboto};
  line-height: 1.2;
  ${tb`
    font-size: ${fontSizes.fontSize24};
  `}
`;

const DiscountedYen = styled.div`
  color: ${colors.Red};
  font-size: ${fontSizes.fontSize24};
  font-style: ${fonts.NotoSansJP};
  ${tb`
    font-size: ${fontSizes.fontSize14};
  `}
`;

const NormalSellingPrice = styled.div`
  color: ${colors.Black};
  font-size: ${fontSizes.fontSize36};
  font-style: ${fonts.Roboto};
  line-height: 1.2;
  ${tb`
    font-size: ${fontSizes.fontSize24};
  `}
`;

const NormalYen = styled.div`
  color: ${colors.Black};
  font-size: ${fontSizes.fontSize24};
  font-style: ${fonts.NotoSansJP};
  ${tb`
    font-size: ${fontSizes.fontSize14};
  `}
`;

type ProductPriceProps = {
  discounted: boolean;
  originalPrice: number;
  sellingPrice: number;
};

export const ProductPrice: FC<ProductPriceProps> = ({
  discounted,
  originalPrice,
  sellingPrice,
}) => (
  <Container>
    <TaxExcluded>税抜</TaxExcluded>
    {discounted ? (
      <>
        <DiscountedOriginalPrice>{originalPrice}→</DiscountedOriginalPrice>
        <DiscountedSellingPrice>{sellingPrice}</DiscountedSellingPrice>
        <DiscountedYen>円</DiscountedYen>
      </>
    ) : (
      <>
        <NormalSellingPrice>{sellingPrice}</NormalSellingPrice>
        <NormalYen>円</NormalYen>
      </>
    )}
  </Container>
);

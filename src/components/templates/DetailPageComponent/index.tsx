import { FC } from 'react';
import { ProductPrice } from 'src/components/atoms/ProductPrice';
import { ProductTag } from 'src/components/atoms/ProductTag';
// eslint-disable-next-line import/no-cycle
import { DetailPageProps } from 'src/pages/detail/[id]';
import { colors, fontSizes, fonts, spacingSizes } from 'src/styles/Tokens';
import { mb, tb } from 'src/styles/media';
import styled from 'styled-components';

const TitleSection = styled.section`
  padding: ${spacingSizes.lg};
  background-color: ${colors.YumeWhiteGreen};
  ${tb`
    padding: ${spacingSizes.sm} ${spacingSizes.md};
  `}
  ${mb`
    padding: ${spacingSizes.sm};
  `}
`;

const Title = styled.h1`
  font-size: ${fontSizes.fontSize32};
  font-style: ${fonts.NotoSansJP};
  ${tb`
    font-size: ${fontSizes.fontSize24};
  `}
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 22px;
`;

export const DetailPageComponent: FC<{ props: DetailPageProps }> = ({
  props,
}) => {
  const { id, name, thumbnail, price, tags } = props;
  return (
    <TitleSection>
      <Title>{name}</Title>
      <InfoContainer>
        <div>
          {tags.map((tag) => (
            <ProductTag
              key={tag.id}
              path={`/detail/${tag.id}`}
              name={tag.name}
              color={tag.color}
            />
          ))}
        </div>
        <ProductPrice
          discounted={price.discounted}
          originalPrice={price.original_price}
          sellingPrice={price.selling_price}
        />
      </InfoContainer>
    </TitleSection>
  );
};

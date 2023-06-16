import { FC } from 'react';
import { ProductCard } from 'src/components/atoms/ProductCard';
import { ProductPrice } from 'src/components/atoms/ProductPrice';
import { ProductTag } from 'src/components/atoms/ProductTag';
// eslint-disable-next-line import/no-cycle
import { DetailPageProps } from 'src/pages/detail/[id]';
import { colors, fontSizes, fonts, spacingSizes } from 'src/styles/Tokens';
import { mb, tb } from 'src/styles/media';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${colors.YumeWhiteGreen};
`;

const TitleSection = styled.section`
  padding: ${spacingSizes.lg};
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

const DescriptionContainer = styled.section`
  padding: ${spacingSizes.lg};
`;

const DescriptionHeader = styled.h2`
  font-size: ${fontSizes.fontSize24};
  font-style: ${fonts.NotoSansJP};
  ${tb`
    font-size: ${fontSizes.fontSize18};
  `}
`;

const DescriptionContent = styled.p`
  margin-top: ${spacingSizes.sm};
  font-size: ${fontSizes.fontSize18};
  font-style: ${fonts.NotoSansJP};
  ${tb`
    font-size: ${fontSizes.fontSize12};
  `}
`;

const RelatedItemSection = styled.section`
  padding: 0 ${spacingSizes.lg} ${spacingSizes.xl};
  margin-top: ${spacingSizes.lg};
  ${tb`
    padding: 0 ${spacingSizes.md} ${spacingSizes.xl};
  `}
  ${mb`
    padding: 0 ${spacingSizes.sm} ${spacingSizes.xl};
  `}
`;

const RelatedItemTitle = styled.h2`
  font-size: ${fontSizes.fontSize24};
  font-style: ${fonts.NotoSansJP};
  ${tb`
    font-size: ${fontSizes.fontSize18};
  `}
`;

const RelatedItemList = styled.div`
  display: flex;
  margin-top: ${spacingSizes.sm};
  gap: ${spacingSizes.sm};
`;

export const DetailPageComponent: FC<{ props: DetailPageProps }> = ({
  props,
}) => {
  const { id, name, thumbnail, price, tags, details } = props;
  const relatedShopItems = props.related_shop_items;
  return (
    <Container>
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
      <DescriptionSection>
        <DescriptionHeader>{details[0].header}</DescriptionHeader>
        <DescriptionContent>{details[0].content}</DescriptionContent>
      </DescriptionSection>
      <RelatedItemSection>
        <RelatedItemTitle>関連商品</RelatedItemTitle>
        <RelatedItemList>
          {relatedShopItems.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              path={`/detail/${item.id}`}
              thumbnail={item.thumbnail}
            />
          ))}
        </RelatedItemList>
      </RelatedItemSection>
    </Container>
  );
};

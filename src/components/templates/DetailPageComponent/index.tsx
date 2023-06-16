import { FC } from 'react';
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

export const DetailPageComponent: FC<{ props: DetailPageProps }> = ({
  props,
}) => {
  const { id, name, thumbnail, price, tags, details } = props;
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
      <DescriptionContainer>
        <DescriptionHeader>{details[0].header}</DescriptionHeader>
        <DescriptionContent>{details[0].content}</DescriptionContent>
      </DescriptionContainer>
    </Container>
  );
};

import Link from 'next/link';
import { FC } from 'react';
import { colors, fontSizes, fonts } from 'src/styles/Tokens';
import { tb } from 'src/styles/media';
import styled from 'styled-components';

const Container = styled.section<{ color: string }>`
  width: fit-content;
  background-color: ${(props) => props.color};
  color: ${colors.White};
`;

const TagText = styled.p`
  padding: 0 8px;
  font-size: ${fontSizes.fontSize22};
  font-family: ${fonts.NotoSansJP};
  ${tb`
    padding: 0 4px;
    font-size: ${fontSizes.fontSize12};
  `}
`;

type ProductTagProps = {
  path: string;
  name: string;
  color: string;
};

export const ProductTag: FC<ProductTagProps> = ({ path, name, color }) => (
  <Link href={path}>
    <Container color={color}>
      <TagText>{name}</TagText>
    </Container>
  </Link>
);

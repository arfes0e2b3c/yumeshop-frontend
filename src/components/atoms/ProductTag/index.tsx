import Link from 'next/link';
import { FC } from 'react';
import { colors, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

const Container = styled.section<{ color: string }>`
  width: fit-content;
  background-color: ${(props) => props.color};
  color: ${colors.White};
`;

const TagText = styled.p`
  padding: 0 8px;
  font-size: ${fontSizes.fontSize22};
  line-height: 32px;
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

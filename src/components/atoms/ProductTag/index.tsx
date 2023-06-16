import Link from 'next/link';
import { FC } from 'react';
import { colors, fontSizes, fonts } from 'src/styles/Tokens';
import { tb } from 'src/styles/media';
import styled from 'styled-components';

type ProductTagProps = {
  path: string;
  name: string;
  color: string;
};

const Container = styled.section<Pick<ProductTagProps, 'color'>>`
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
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

export const ProductTag: FC<ProductTagProps> = ({ path, name, color }) => (
  <Link href={path}>
    <Container color={color}>
      <TagText>{name}</TagText>
    </Container>
  </Link>
);

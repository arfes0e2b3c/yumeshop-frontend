import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { tb } from 'src/styles/media';
import styled from 'styled-components';

const ItemCardContainer = styled.div`
  width: 244px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  ${tb`
    width: 200px;
    `}
`;

const ItemImage = styled(Image)`
  vertical-align: top;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  margin: 8px;
  ${tb`
    margin: 4px;
  `}
`;

type ItemCardProps = {
  id: string;
  name: string;
  thumbnail: string;
};

export const ItemCard: FC<ItemCardProps> = ({ name, id, thumbnail }) => (
  <Link href={`/detail/${id}`}>
    <ItemCardContainer>
      <ItemImage
        src={thumbnail}
        alt="商品のサムネイル画像"
        width={244}
        height={244}
      />
      <ItemTitle>{name}</ItemTitle>
    </ItemCardContainer>
  </Link>
);

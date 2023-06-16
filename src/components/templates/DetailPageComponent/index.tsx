import { FC } from 'react';
import { ProductPrice } from 'src/components/atoms/ProductPrice';
import { ProductTag } from 'src/components/atoms/ProductTag';
// eslint-disable-next-line import/no-cycle
import { DetailPageProps } from 'src/pages/detail/[id]';
import { Container } from 'src/styles/Home';

export const DetailPageComponent: FC<{ props: DetailPageProps }> = ({
  props,
}) => {
  const { id, name, thumbnail, price, tags } = props;
  return (
    <Container>
      <section>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
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
        </div>
      </section>
    </Container>
  );
};

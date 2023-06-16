import { GetStaticPropsContext, NextPage } from 'next';
import { ProductPrice } from 'src/components/atoms/ProductPrice';
import { ProductTag } from 'src/components/atoms/ProductTag';
import { Container } from 'src/styles/Home';

export const getStaticPaths = () => ({
  paths: [
    {
      params: {
        id: '2ab06f5d-15f9-8c56-c685-e4fd103949fe',
      },
    },
  ],
  fallback: true,
});

type Props = {
  id: string;
  name: string;
  thumbnail: string;
  price: {
    selling_price: number;
    original_price: number;
    discounted: boolean;
  };
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
  details: {
    header: string;
    content: string;
  }[];
  images: string[];
  related_shop_items: {
    id: string;
    name: string;
    thumbnail: string;
  }[];
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(
    `http://127.0.0.1:8080/shop_items/${context.params?.id}`,
  );
  const resJson = await res.json();

  return { props: { resJson } };
};

const DetailPage: NextPage<{ resJson: Props }> = ({ resJson }) => {
  const { id, name, thumbnail, price, tags } = resJson;
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

export default DetailPage;

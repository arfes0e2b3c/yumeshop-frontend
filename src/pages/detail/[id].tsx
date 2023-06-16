import { GetStaticPropsContext, NextPage } from 'next';
import { DetailPageComponent } from 'src/components/templates/DetailPageComponent';

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

export type DetailPageProps = {
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
  return { props: { data: resJson } };
};

const DetailPage: NextPage<{ data: DetailPageProps }> = ({ data }) => (
  <DetailPageComponent props={data} />
);
export default DetailPage;

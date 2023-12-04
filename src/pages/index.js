import React from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Layout, Header, ProductList } from "../components";
import { fetchProducts } from "../hooks";

const Home = ({ products }) => {
  return (
    <Layout>
      <Header />
      <ProductList products={products} />
    </Layout>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  const products = await queryClient.fetchQuery({
    queryKey: ["products", 12],
    queryFn: () => fetchProducts(12),
  });

  return {
    props: {
      products,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;

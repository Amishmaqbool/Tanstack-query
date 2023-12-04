// pages/products/[productId].js
import React from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ProductDetail } from "../../components/ProductDetail";
import { fetchProductIds } from "../../hooks/useProductDetails";

const ProductDetailPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ProductDetail product={product} />;
};

export async function getStaticPaths() {
  const productIds = await fetchProductIds();

  const paths = productIds.map((productId) => ({
    params: { productId: productId.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["productDetails", params.productId],
    queryFn: () => fetchProductDetails(params.productId),
  });

  return {
    props: {
      product: queryClient.getQueryData(["productDetails", params.productId]),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default ProductDetailPage;

import ky from "ky-universal";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (limit = 100, category = null) => {
  try {
    const categoryPath = category ? `/category/${category}` : "";
    const response = await ky(
      `https://dummyjson.com/products${categoryPath}`
    ).json();
    const products = response.products;
    return products.filter((x) => x.id <= limit);
  } catch (error) {
    throw new Error(
      `Error fetching products${category ? ` for category ${category}` : ""}`
    );
  }
};

const useProducts = (limit, category) => {
  return useQuery({
    queryKey: ["products", limit, category],
    queryFn: () => fetchProducts(limit, category),
  });
};

export { useProducts, fetchProducts };

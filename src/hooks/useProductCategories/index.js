import ky from "ky-universal";
import { useQuery } from "@tanstack/react-query";

const fetchProductCategories = async () => {
  try {
    const response = await ky("https://dummyjson.com/products/categories").json();
    return response;
  } catch (error) {
    throw new Error("Error fetching product categories");
  }
};

const useProductCategories = () => {
  return useQuery({
    queryKey: ["productCategories"],
    queryFn: fetchProductCategories,
  });
};

export { useProductCategories, fetchProductCategories };

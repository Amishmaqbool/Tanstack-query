import ky from "ky-universal";

const fetchProductDetails = async (productId) => {
  try {
    const response = await ky(`https://dummyjson.com/products/${productId}`).json();
    const productDetails = response; 
    return productDetails;
  } catch (error) {
    throw new Error(`Error fetching product details for productId ${productId}`);
  }
};


const fetchProductIds = async () => {
  try {
    const response = await ky("https://dummyjson.com/products").json();
    const products = response.products;
    return products.map((product) => product.id);
  } catch (error) {
    throw new Error("Error fetching product IDs");
  }
};

export { fetchProductDetails, fetchProductIds };

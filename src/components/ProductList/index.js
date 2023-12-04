import React, { useState, useRef, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useProductCategories } from "../../hooks/useProductCategories";
import { InfinitySpin } from "react-loader-spinner";
import Link from "next/link";

export const ProductList = () => {
  const [productCount, setProductCount] = useState(50);
  const { data: categoriesData, isPending: isCategoriesPending } =
    useProductCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data, isPending, isFetching } = useProducts(
    productCount,
    selectedCategory
  );

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [data]);

  if (isCategoriesPending)
    return (
      <div className="flex justify-center">
        <InfinitySpin height="500" width="500" color="#4fa94d" />
      </div>
    );

  return (
    <>
      <div className="m-4 flex gap-4 overflow-scroll">
        {/* Show All Products Tab */}
        <button
          className={`mr-2 px-4 py-2 rounded-md ${
            selectedCategory === null ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All Products
        </button>

        {/* Category Tabs */}
        {categoriesData?.map((category) => (
          <button
            key={category}
            className={`mr-2 px-4 py-2 rounded-md ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <section className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4" ref={containerRef}>
          {data?.map((product, index) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-h-[300px] object-cover mb-4 rounded-md"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{product.title}</span>
                <span className="text-sm font-medium">${product.price}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {product.description}
              </p>
              <Link href={`/products/${product.id}`}>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {}}
                >
                  Show Detail
                </button>
              </Link>
            </div>
          ))}
        </div>
        {productCount <= 90 && (
          <div className="flex justify-center">
            <button
              onClick={() => setProductCount(productCount + 50)}
              disabled={isFetching}
              className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              {isFetching ? "Loading..." : "Show More"}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

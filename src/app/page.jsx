"use client";

import { useGetProducts } from "@/hooks/useProducts";

import Product from "@/components/Product";

const Homepage = () => {
  const { isLoading, data: products } = useGetProducts();

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <h1 className="text-left text-xs text-secondary-500">
        دیوار قائم‌شهر، نیازمندی های رایگان، آگهی‌های خرید
      </h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-5">
        {products &&
          products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Homepage;

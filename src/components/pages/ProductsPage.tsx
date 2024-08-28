import { useState, useEffect } from "react";
import { Spinner } from "../ui/Spinner";
import { products as staticProducts } from "../../data/products";
import { ProductCard } from "../Product/ProductCard";

export const ProductsPage = () => {
  const [products, setProducts] = useState<typeof staticProducts | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setProducts(staticProducts);
      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

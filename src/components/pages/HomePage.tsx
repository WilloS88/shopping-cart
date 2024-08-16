import { products } from "../../data/products";
import { ProductCard } from "../product/ProductCard";

export const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

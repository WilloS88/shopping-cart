import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { Button } from "../ui/Button";

export const ProductsPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 flex ">
      <div>
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <div className="flex items-center my-4">
            <span className="text-gray-900 font-bold text-2xl">
              ${product.price}
            </span>
          </div>
          <p className="text-gray-600">Type: {product.type}</p>
          <p className="text-gray-600">Caliber: {product.caliber}</p>
        </div>
      </div>
      <div>
        <Button type="button" label="Add to cart" className="danger" />
      </div>
    </div>
  );
};

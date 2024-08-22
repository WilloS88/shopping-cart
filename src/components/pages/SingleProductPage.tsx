import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { Button } from "../ui/Button";
import { CornerUpLeft, ShoppingBasket, DollarSign } from "lucide-react";

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 flex justify-center gap-2">
      <div>
        <Link to={"/products"}>
          <Button
            type="button"
            label=""
            className="Secondary rounded-3xl"
            icon={<CornerUpLeft />}
          />
        </Link>
      </div>
      <div>
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="px-6 py-4 flex items-center justify-between gap-5">
          <div>
            <div className="font-bold text-2xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-lg w-3/4">{product.description}</p>
            <div className="flex items-center my-4">
            <DollarSign size={22} strokeWidth={3} className="mt-1 mr-1"/>
              <span className="text-gray-900 font-bold text-2xl">
                {product.price}
              </span>
            </div>
            <p className="text-gray-600">Type: {product.type}</p>
            <p className="text-gray-600">Caliber: {product.caliber}</p>
          </div>
          <div className="">
            <Button
              type="button"
              label="Add to cart"
              className="Secondary min-w-36"
              icon={<ShoppingBasket />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

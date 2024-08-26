import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { Button } from "../ui/Button";
import { CornerUpLeft, ShoppingBasket, DollarSign, Check } from "lucide-react";
import { useCart } from "../hooks/useCart";

export const SingleProductPage = () => {
  const [productAdded, setProductAdded] = useState(false);
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Product not found
      </div>
    );
  }

  const handleAddCartClick = () => {
    setProductAdded(true);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
      description: product.description,
      type: product.type,
      caliber: product.caliber,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 flex justify-center gap-2 flex-wrap">
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
        <img
          className="w-full rounded"
          src={product.image}
          alt={product.name}
        />
        <div className="px-6 py-4 flex lg:flex-nowrap flex-wrap items-center justify-between gap-5">
          <div>
            <div className="font-bold text-2xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-lg w-3/4">{product.description}</p>
            <div className="flex items-center my-4">
              <DollarSign size={22} strokeWidth={3} className="mt-1 mr-1" />
              <span className="text-gray-900 font-bold text-2xl">
                {product.price}
              </span>
            </div>
            <p className="text-gray-600">Type: {product.type}</p>
            <p className="text-gray-600">Caliber: {product.caliber}</p>
          </div>
          <div className="flex-col pb-4 h-[90px]">
            <Button
              type="button"
              onClick={handleAddCartClick}
              label="Add to cart"
              className="Secondary min-w-36 mb-4"
              icon={<ShoppingBasket />}
            />
            {productAdded === true && (
              <div className="flex justify-center text-green-600 text-center m-2 gap-1 font-semibold">
                Added <Check color="green" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

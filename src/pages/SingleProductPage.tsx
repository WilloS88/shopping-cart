import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "../components/ui/Spinner";
import { SUPABASE_URL, SUPABASE_API_KEY } from "../supabase/supabase";
import type { ProductItem as Product } from "../types/Product";
import { getPublicImageUrl } from "../supabase/getPublicImageUrl";
import { Button } from "../components/ui/Button";
import { CornerUpLeft, ShoppingBasket, DollarSign, Check } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cart/cartSlice";

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [productAdded, setProductAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product[]>(
          `${SUPABASE_URL}/rest/v1/products`,
          {
            headers: {
              apikey: SUPABASE_API_KEY,
              Authorization: `Bearer ${SUPABASE_API_KEY}`,
              "Content-Type": "application/json",
            },
            params: {
              id: `eq.${id}`,
            },
          },
        );
        if (response.data.length > 0) {
          setProduct(response.data[0]);
        }
      } catch (error) {
        console.error("Chyba při načítání produktu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Spinner />;
  if (!product) {
    return (
      <div className="mt-4 grid min-h-full place-items-center bg-white px-6 py-24 text-2xl font-bold tracking-tight text-gray-900 sm:py-32 sm:text-4xl lg:px-8">
        Produkt nenalezen.
      </div>
    );
  }

  const handleAddCartClick = () => {
    setProductAdded(true);
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image_url,
        image_url: product.image_url,
        description: product.description,
        type: product.type,
        caliber: product.caliber,
      }),
    );
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 p-4">
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
          src={getPublicImageUrl(product.image_url)}
          alt={product.name}
        />
        <div className="flex flex-wrap items-center justify-between gap-5 px-6 py-4 lg:flex-nowrap">
          <div>
            <div className="mb-2 text-2xl font-bold">{product.name}</div>
            <p className="w-3/4 text-lg text-gray-700">{product.description}</p>
            <div className="my-4 flex items-center">
              <DollarSign size={22} strokeWidth={3} className="mr-1 mt-1" />
              <span className="text-2xl font-bold text-gray-900">
                {product.price}
              </span>
            </div>
            <p className="text-gray-600">Type: {product.type}</p>
            <p className="text-gray-600">Caliber: {product.caliber}</p>
          </div>
          <div className="h-[90px] flex-col pb-4">
            <Button
              type="button"
              onClick={handleAddCartClick}
              label="Add to cart"
              className="Secondary mb-4 min-w-36"
              icon={<ShoppingBasket />}
            />
            {productAdded && (
              <div className="m-2 flex justify-center gap-1 text-center font-semibold text-green-600">
                Added <Check color="green" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

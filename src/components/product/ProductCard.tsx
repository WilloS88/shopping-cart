import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";
import { Card } from "../ui/Card";
import { getPublicImageUrl } from "../../supabase/getPublicImageUrl";
import type { ProductCardProps } from "../../types/ProductCard";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}>
      <Card>
        <img
          className="w-full"
          src={getPublicImageUrl(product.image_url)}
          alt={product.name}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{product.name}</div>
          <p className="text-base text-gray-700">{product.description}</p>
          <div className="flex items-center">
            <DollarSign size={14} strokeWidth={3} className="mr-1" />
            <span className="font-bold text-gray-900">{product.price}</span>
          </div>
          <p className="text-gray-600">Type: {product.type}</p>
          <p className="text-gray-600">Caliber: {product.caliber}</p>
        </div>
      </Card>
    </Link>
  );
};

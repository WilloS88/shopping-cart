import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";
import { Card } from "../ui/Card";
import type { ProductCardProps } from "../../types/ProductCard";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}>
      <Card>
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
          <div className="flex items-center">
            <DollarSign size={14} strokeWidth={3} className="mr-1" />
            <span className="text-gray-900 font-bold">{product.price}</span>
          </div>
          <p className="text-gray-600">Type: {product.type}</p>
          <p className="text-gray-600">Caliber: {product.caliber}</p>
        </div>
      </Card>
    </Link>
  );
};

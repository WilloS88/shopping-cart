import { useNavigate } from 'react-router-dom';
import { DollarSign } from "lucide-react";
import { Product } from "../../data/products";
import { Card } from '../ui/Card';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <div onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer">
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-primary mr-1" />
            <span className="text-gray-900 font-bold">{product.price}</span>
          </div>
          <p className="text-gray-600">Type: {product.type}</p>
          <p className="text-gray-600">Caliber: {product.caliber}</p>
        </div>
      </div>
    </Card>
  );
};

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../components/ui/Spinner";
import { products as staticProducts } from "../data/products";
import { ExpandableSearchBar } from "../components/ui/ExpandableSearchbar";
import { ProductCard } from "../components/product/ProductCard";
import { FilterSection } from "../components/section/FilterSection";
import { RootState } from "../state/store";

export const ProductsPage = () => {
  const [products, setProducts] = useState<typeof staticProducts | null>(null);
  const [loading, setLoading] = useState(true);

  const { weaponType, caliber } = useSelector(
    (state: RootState) => state.filter
  );
  const searchQuery = useSelector((state: RootState) => state.search.query);

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

  const filteredProducts = products?.filter((product) => {
    if (weaponType && product.type !== weaponType) {
      return false;
    }
    if (caliber && product.caliber !== caliber) {
      return false;
    }
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex-col justify-center items-center">
      <div className="flex-col justify-center items-center">
        <ExpandableSearchBar />
        <FilterSection />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

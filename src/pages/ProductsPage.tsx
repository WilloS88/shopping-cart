import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Spinner } from "../components/ui/Spinner";
import { ProductCard } from "../components/product/ProductCard";
import { FilterSection } from "../components/section/FilterSection";
import { RootState } from "../state/store";
import { SearchButton } from "../components/ui/SearchButton";
import { SUPABASE_URL, SUPABASE_API_KEY } from "../supabase/supabase";
import type { ProductItem as Product } from "../types/Product";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  const { weaponType, caliber } = useSelector(
    (state: RootState) => state.filter,
  );
  const searchQuery = useSelector((state: RootState) => state.search.query);

  useEffect(() => {
    const loadProducts = async () => {
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
              order: "id.asc",
            },
          },
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Chyba při načítání produktů:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const filteredProducts = products?.filter((product) => {
    if (weaponType && product.type !== weaponType) return false;
    if (caliber && product.caliber !== caliber) return false;
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="flex-col items-center justify-center">
      <div className="lg:hidden">
        <SearchButton isMobile={true} />
      </div>
      <div className="flex items-center justify-center">
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

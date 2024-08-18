// import { useState, useEffect } from "react";
// import { Spinner } from "../ui/Spinner";
// import { products as staticProducts } from "../../data/products";
// import { ProductCard } from "../product/ProductCard";
import { SwiperGunSection } from "../section/SwiperGunSection";

import guns1 from "../../assets/swiper/guns/guns1.jpg"
import guns2 from "../../assets/swiper/guns/guns2.jpg"
import guns3 from "../../assets/swiper/guns/guns3.jpg"
import guns4 from "../../assets/swiper/guns/guns4.jpg"
import guns5 from "../../assets/swiper/guns/guns5.jpg"

const images = [
  guns1, guns2, guns3, guns4, guns5
]


export const HomePage = () => {
  // const [products, setProducts] = useState<typeof staticProducts | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     // Simulate an async operation, such as fetching data from an API
  //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  //     setProducts(staticProducts);
  //     setLoading(false);
  //   };

  //   loadProducts();
  // }, []);

  // if (loading) {
  //   return <Spinner />
  // }

  return (
    <div className="flex flex-wrap justify-center">
      {/* {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      <SwiperGunSection images={images}/>
    </div>
  );
};

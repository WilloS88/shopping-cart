import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../data/products";
import { ProductCard } from "./ProductCard";

const ProductSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {products.slice(0, 5).map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;

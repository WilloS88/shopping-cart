import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

type SwiperGunSectionProps = {
  images: string[];
};

export const SwiperGunSection = ({ images }: SwiperGunSectionProps) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      pagination
      modules={[Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            className="flex justify-center items-center rounded pb-10"
            width={500}
            height={50}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

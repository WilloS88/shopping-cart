import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import type { SwiperProps } from "../../types/swiper/Swiper";

export const SwiperSection = ({ images }: SwiperProps) => {
  return (
    <>
      <div className="hidden lg:flex">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          pagination
          modules={[Pagination]}
          className="hidden lg:flex lg:justify-center lg:itenms-center lg:w-full lg:max-w-5xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="pb-10">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="h-full rounded"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="flex lg:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination
            modules={[Pagination]}
            className="max-w-lg w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full rounded mx-auto mb-10"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

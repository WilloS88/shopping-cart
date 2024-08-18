import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; // Correct imports

type SwiperGunSectionProps = {
  images: string[];
};

export const SwiperGunSection = ({ images }: SwiperGunSectionProps) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true} // Enables infinite scrolling
      navigation // Enables navigation arrows
      pagination={{ clickable: true }} // Enables pagination
      modules={[Navigation, Pagination]} // Correctly specify modules
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="w-1600 h-900" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

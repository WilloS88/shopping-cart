import { SwiperAboutUs } from "../components/section/SwiperAboutUs";

import poster1 from "../assets/swiper/posters/poster1.jpg";
import poster2 from "../assets/swiper/posters/poster2.jpg";
import poster3 from "../assets/swiper/posters/poster3.jpg";
import poster4 from "../assets/swiper/posters/poster4.jpg";
import poster5 from "../assets/swiper/posters/poster5.jpg";

const images = [poster1, poster2, poster3, poster4, poster5];

export const AboutUsPage = () => {
  return (
    <div>
      <div className="max-w-3xl md:mx-auto mx-5 my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to WilloS Gunshop, a place where passion meets precision.
          Founded in 1989 by Roman Will, a lifelong enthusiast of firearms and
          outdoor adventures, our store has become a haven for those who share a
          deep respect for quality and craftsmanship.
        </p>
        <p className="text-lg text-gray-700">
          Roman Will started this journey over a decade ago with a simple goal:
          to provide the finest selection of firearms to like-minded
          individuals. What began as a small local shop has grown into a trusted
          name in the community, offering a wide range of products and
          unparalleled customer service. Join us in celebrating the art of
          precision and the spirit of adventure.
        </p>
      </div>
      <div className="ml-10">
        <SwiperAboutUs images={images} />
      </div>
    </div>
  );
};

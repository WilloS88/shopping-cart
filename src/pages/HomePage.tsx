// import { useState, useEffect } from "react";
// import { Spinner } from "../components/ui/Spinner";
import { AnimatedGunSection } from "../components/section/AnimatedGunSection";
import { SwiperSection } from "../components/section/SwiperSection";

import guns1 from "../assets/swiper/guns/guns1.jpg";
import guns2 from "../assets/swiper/guns/guns2.jpg";
import guns3 from "../assets/swiper/guns/guns3.jpg";
import guns4 from "../assets/swiper/guns/guns4.jpg";
import guns5 from "../assets/swiper/guns/guns5.jpg";

const images = [guns1, guns2, guns3, guns4, guns5];

export const HomePage = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 300));
  //     setLoading(false);
  //   };

  //   loadProducts();
  // }, []);

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <div className="flex-col justify-center items-center mx-4">
      <div>
        <AnimatedGunSection />
      </div>
      <div className="mb-2">
        <SwiperSection images={images} />
      </div>
    </div>
  );
};

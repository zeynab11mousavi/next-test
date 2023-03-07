import one from "../../assets/RandD/one.jpg";
import two from "../../assets/RandD/two.jpg";
import three from "../../assets/RandD/three.jpg";
import four from "../../assets/RandD/four.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Head from "next/head";

const RandD = () => {
  const images = [one, two, three, four];
  return (
    <div className="w-8/12 mx-auto my-8 md:mt-48">
      <Head>
        <title>AHT | R&D</title>
      </Head>
      <p className="text-2xl md:text-3xl my-6">RESEARCH & DEVELOPMENT</p>
      <div className="md:text-lg ">
        <p>
          Investment in research and development (R&D) bring forth the
          foundation for the successful evolution of innovation and modern
          BUSINESS.
        </p>
        <p>
          AHT is well-aware that giving greater priority to research and
          development (R&D) investments will help to ensure our country&apos;s
          future competitiveness and to pave the way for healthy food
          innovation.
        </p>
        <p>
          People understand that food is a source of nourishment and
          satisfaction, pleasure, health, happiness and peace of mind. They are
          increasingly aware that their food and beverage choices can impact
          their quality of life.
        </p>
        <p>
          Innovation has been at the heart of our company. Our research and
          development use innovations that always are dynamic and agile.
        </p>
        <p>
          Each and every day, we try to make our products healthier to help
          consumers care. This would not be possible without our R&D capability
          and passion for quality in everything we do.
        </p>
        <p>
          Behind all AHT products is a team that is committed to create safe
          products with the highest quality.
        </p>
        <p>
          Our R&D team takes important Steps toward Better food production which
          leads to healthier Life. Safety and at the same time deliciousness
          based on superior quality-control technology is AHT&apos;s R&D main
          goal.
        </p>
      </div>

      <div className="w-8/12 mx-auto my-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={true}
          pagination={{ clickable: true }}
          style={{ margin: "0 0 2rem 0" }}
        >
          {images?.map((slide, i = 0) => (
            <React.Fragment key={i++}>
              <SwiperSlide key={`${slide}`}>
                <Image  className="w-9/12 mx-auto" src={slide} alt="slider" />
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RandD;

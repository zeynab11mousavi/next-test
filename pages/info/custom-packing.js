import customPacking from "@/assets/customPacking/customPacking";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React from "react";
import Head from "next/head";

const CustomPacking = () => {
  const { one, two, three, four, five } = customPacking;
  const images = [one, two, three, four, five];
  return (
    <div className="w-8/12 mx-auto my-8 md:mt-48">
      <Head>
        <title>AHT | Custom packing</title>
      </Head>
      {/* SWIPER */}
      <div className="w-full md:w-8/12 mx-auto my-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={true}
          pagination={{ clickable: true }}
          style={{ margin: "0 0 2rem 0" }}
        >
          {images?.map((slide, index = 0) => (
            <React.Fragment key={index++}>
              <SwiperSlide key={`${slide}`}>
                <Image
                  width={1000}
                  height={700}
                  className="w-full md:w-9/12 mx-auto"
                  src={slide}
                  alt="slider"
                />
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>

      {/*  */}
      <p className="text-lg md:text-xl">CUSTOM PACKAGING</p>
      <div>
        We manufacture and pack a wide range of products inclusive of Dried
        Fruits, Nuts, Freeze-Dried Fruits & vegetables and spices such as
        Saffron.
        <br />
        Products conceivably will be produced by us in either our own or
        customers&apos; brands as we are packing and designing experts! Or
        products are going to be supplied in bulk from 5kg up to 25kg and retail
        packages from 50 grams up to 1000 grams. Production speed, quality
        sensitivity, and the importance we attach to on-time delivery are the
        main factors to our success and put our company ahead of its
        competitors.
        <br />
        The quality and safety of our products are known and preferred by most
        reputable companies and customers across the globe. With our fast and
        easy access to high-quality raw materials, we have been successfully
        meeting the needs of our customers by supplying products that can be
        produced under their brands.
        <br />
        Considering the flexibility provided by our thoroughly manufacturing
        company profile, we are honoured to share our experience with our
        customers to give them the unique opportunity to pack their products by
        their own packaging or label design in their desired weights. Widely
        different packaging materials can be put to use as per customer wish.
        <br /> We are here to listen to your suggestions, help you to find your
        desired products&apos; information, offer shipping recommendations and
        more. We also welcome your comments and feedback.
        <br />
        AHT allows customers to design their packaging based on their interest,
        print their desired name, logo, address or anything else according to
        their need.
        <br />
        Let the globe to get familiar with your brand story and make impressive
        impressions through AHT&apos;s custom-designed packaging.
      </div>
    </div>
  );
};

export default CustomPacking;

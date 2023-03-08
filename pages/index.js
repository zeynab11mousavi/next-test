import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { api, site, path, products, category } from "config/api";
import desktopSlider from "../assets/desktopSlider/index";
import phoneSlider from "../assets/phoneSlider/index";
import Card from "@/components/card";
import YouMayLike from "@/components/YouMayLike";

// const inter = Inter({ subsets: ["latin"] });

//------------------------------------------------------ GET STATIC PROPS ----------------------------------------------------------------

export const getStaticProps = async () => {
  // FETCH POPULAR PRODUCTS
  const res = await fetch(
    `${api}${products}?${category}=3&type=retail&_limit=6`
  );
  const data = await res.json();

  // FETCH POPULAR PRODUCTS
  const newsRes = await fetch(`${api}news?_limit=3`);
  const newsData = await newsRes.json();

  // FETCH POPULAR PRODUCTS
  const eventsRes = await fetch(`${api}events`);
  const eventsData = await eventsRes.json();

  return {
    props: {
      popular: data,
      news: newsData,
      events: eventsData,
    },
  };
};

//--------------------------------------------COMPONENT--------------------------------------------//

const Home = ({ popular, news, events }) => {
  const phoneSlid = [phoneSlider.Pista, phoneSlider.Figs, phoneSlider.AHT];
  const deskSlid = [
    desktopSlider.PistaD,
    desktopSlider.FigsD,
    desktopSlider.AHTD,
  ];

  return (
    <>
      {/* SLIDERS */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 8500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ margin: "0 0 2rem 0" }}>
          {deskSlid?.map((slide, index = 0) => (
            <SwiperSlide key={`${index++}`}>
              <div className="mt-16 md:mt-2" key={index++}>
                <Image
                  key={index++}
                  className="w-9/12 mx-auto hidden md:block"
                  src={deskSlid[index]}
                  alt="slider"
                  width={1200}
                  height={400}
                />
                <Image
                  key={index++}
                  className="w-9/12 mx-auto md:hidden"
                  src={phoneSlid[index]}
                  alt="slider"
                  width={500}
                  height={350}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* NEWS AND EVENTD */}

      <div
        id="newsEventsWrapper"
        className="w-full lg:p-8 block md:flex justify-around">
        {/* NEWSLETTERS */}
        <div className=" w-full md:w-8/12 mx-auto md:mx-[0]">
          <div className="text-3xl md:text-[38px] text-[#7D2F2F] mb-4 ml-4">
            {" "}
            NEWS
          </div>
          <div
            id="news"
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-1.5 md: gap-6">
            {news?.map((i, index = 0) => (
              <div
                key={index++}
                className="shadow-sm p-4 border border-gray-50 w-[310px] h-[300px] mx-auto ">
                <img
                  className="h-[200px] mx-auto hover:blur-[1px] "
                  src={`${path}${i.image}`}
                  alt={i.title}
                  // width={300}
                  // height={100}
                />
                <div className="felx-col justifuy-between">
                  <p className="text-sm md:text-base text-[#7D2F2F]">
                    {i.title}
                  </p>
                  <a
                    href={`${site}event-news/${i.title}`}
                    className="text-xs md:text-sm text-[#A54646]">
                    click here to read the article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EVENTS */}
        <div id="events" className="w-full mx-auto md:w-3/12 mt-8 md:mt-0 ">
          <div className=" text-3xl md:text[32px] text-[#7D2F2F] mb-0 m-4">
            {" "}
            UPCOMING EVENTS
          </div>
          <div id="news" className="h-[300px] ">
            {events?.map((i, index = 0) => (
              <div
                key={index++}
                className="flex w-11/12 md:w-full h-[150px] border-b shadow-sm items-center px-2 py-4 m-4 md:m-0">
                <div className="  bg-[#7D2F2F] text-white w-16 h-16 text-center pt-2 m-2 rounded-lg">
                  {i.date}
                </div>
                <div className="felx-col justifuy-between  w-9/12 m-2">
                  <p className="text-lg md:text-2xl text-[#7D2F2F]">
                    {i.title}
                  </p>
                  <p
                    href="#"
                    className="text-sm md:text-base h-16  text-[#A54646]">
                    {i.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPULAR PRODUCTS  */}
      <p className="text-3xl md:text-[38px] text-[#660100] m-4">POPULAR</p>
      {/* <YouMayLike /> */}
      <div id="popularWrapper" className="w-full md:p-8 ">
        <YouMayLike />
      </div>
    </>
  );
};

export default Home;

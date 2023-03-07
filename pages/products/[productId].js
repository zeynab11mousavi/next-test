import { NewInstance } from "@/api/http";
import { api, category, path, products, subcategory, site } from "@/config/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import YouMayLike from "components/youMayLike/YouMayLike";
import { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import YouMayLike from "@/components/YouMayLike";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";
import noImage from "../../assets/noImage.jpg";
import Image from "next/image"


const Details = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const { productId } = router.query;
  const [cat, setCat] = useState([{}]);
  const [subcat, setSubcat] = useState([{}]);
  const [nutritionFacts, setNutritionFact] = useState(false);
  const [about, setAbout] = useState(false);
  const [benefits, setBenefits] = useState(false);

  useEffect(() => {
    NewInstance.get(`${api}products?id=` + productId).then((res) =>
      setProduct(res.data)
    );

    NewInstance.get(`${api}${category}`).then((res) => setCat(res.data));

    NewInstance.get(`${api}${subcategory}`).then((res) => setSubcat(res.data));
  }, [router]);

  return product.length > 0 ? (
    <div id="productPageWrapper" className="py-8 px-16 text-[#8A0019] md:mt-36">
      <Head>
        <title>AHT| Product</title>
      </Head>
      {product[0].benefits?.length > 50 ? (
        <>
          <div className="block md:flex justify-around  md:my-12">
            <div id="picAndIntro" className="md:flex  w-full md:w-8/12">
              {/* PRODUCT PICTURE */}
              <div className=" drop-shadow-md  md:px-4  w-full md:w-6/12 h-42 ">
                {product[0].image?.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    autoplay={true}
                    pagination={{ clickable: true }}
                    style={{ padding: "" }}
                  >
                    {product[0].image?.map((slide) => (
                      <SwiperSlide key={`${slide}`}>
                        <img
                          className=" md:h-[300px] w-auto mx-auto mb-8  md:mb-12 "
                          src={`${path}${slide}`}
                          alt="slider"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div
                  className="text-center py-8 w-full h-full b">
                    <Image src={noImage} alt="no image is"/>
                  </div>
                )}
              </div>

              {/* PRODUCT SIZING PACKAGING ETC */}
              <div className="  md:px-4 w-full md:w-6/12 ">
                <p className="text-base md:text-2xl mb-2 font-semibold underline-[5px]">{`${product[0].name}`}</p>
                <div className="text-xs md:text-sm underline my-2">
                  {cat?.map((c, i = 0) =>
                    c.id === Number(product[0].category) ? (
                      <span key={i++}>{c.name}</span>
                    ) : null
                  )}
                  {"/ "}
                  {subcat?.map((s, i = 0) =>
                    s.id === Number(product[0].subcategory) ? (
                      <span key={i++}>{s.name}</span>
                    ) : null
                  )}
                </div>
                <div id="stars" className="text-yellow-300 flex my-2">
                  {" "}
                  <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>{" "}
                </div>

                {product[0].type === "bulk" && (
                  <div className="text-sm md:text-base my-2 font-semibold mb-4">
                    WANNA SEE OUR PACKAGES FOR {product[0].name}
                    <div>
                      <Link
                        href={`${site}${products}/subcategory/${product[0].subcategory}&type=retail`}
                      >
                        click here
                      </Link>
                    </div>
                  </div>
                )}

                <div className="hidden md:block ">
                  <div className="mt-2 text-sm md:text-lg font-semibold">
                    DESCRIPTION{" "}
                  </div>
                  <div className="">{`${product[0].description}`}</div>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className=" w-full md:w-4/12 ">
              <div className=" md:hidden w-full">
                <div className="my-2 text-sm md:text-lg font-semibold ">
                  DESCRIPTION{" "}
                </div>
                <p className="mb-4">{`${product[0].description}`}</p>
              </div>
              {/* ABOUT THE CATEGORY */}
              <p className="text-sm md:text-lg  font-semibold py-4 md:py-0">
                {"ABOUT "}{" "}
                {cat?.map((c) =>
                  c.id === Number(product[0].category) ? (
                    <span key={c.id}>{c.name}</span>
                  ) : null
                )}
                <button className="md:hidden" onClick={() => setAbout(!about)}>
                  {" "}
                  <MdArrowDropDown />{" "}
                </button>
              </p>
              <p className="hidden md:block">
                {cat?.map((c, i=0) =>
                  c.id === Number(product[0].category) ? (
                    <span key={i++}>
                      {c.description ? c.description : "will update soon"}
                    </span>
                  ) : null
                )}
              </p>
            </div>
            {about && (
              <p className=" md:hidden">
                {cat?.map((c, i=0) =>
                  c.id === Number(product[0].category) ? (
                    <span key={i++}>
                      {c.description ? c.description : "will update soon"}
                    </span>
                  ) : null
                )}
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="block md:flex justify-evenly  md:my-12 w-full">
            {/* PRODUCT PICTURE */}
            <div className=" drop-shadow-md  md:px-4  w-full md:w-6/12 h-42 ">
              {product[0].image?.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  navigation
                  autoplay={true}
                  pagination={{ clickable: true }}
                  style={{ padding: "" }}
                >
                  {product[0].image?.map((slide, i=0) => (
                    <SwiperSlide key={i++}>
                      <img
                      key={i++}
                        className=" md:h-[300px] w-auto mx-auto mb-8  md:mb-12 "
                        src={`${path}${slide}`}
                        alt="slider"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="text-center py-8 w-full h-full b">
                  <Image src={noImage}/>
                </div>
              )}
            </div>

            {/* PRODUCT SIZING PACKAGING ETC */}
            <div className="  md:px-4 w-full md:w-full ">
              <p className="text-base md:text-2xl mb-2 font-semibold underline-[5px]">{`${product[0].name}`}</p>
              <div className="text-xs md:text-sm underline my-2">
                {cat?.map((c, i = 0) =>
                  c.id === Number(product[0].category) ? (
                    <span key={i++}>{c.name}</span>
                  ) : null
                )}
                {"/ "}
                {subcat?.map((s, i=0) =>
                  s.id === Number(product[0].subcategory) ? (
                    <span key={i++}>{s.name}</span>
                  ) : null
                )}
              </div>
              <div id="stars" className="text-yellow-300 flex my-2">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
              </div>

              {product[0].type === "bulk" && (
                <div className="text-sm md:text-base my-2 font-semibold mb-4">
                  WANNA SEE OUR PACKAGES FOR {product[0].name}
                  <div>
                    <Link
                      href={`${site}${products}/subcategory/${product[0].subcategory}&type=retail`}
                    >
                      click here
                    </Link>
                  </div>
                </div>
              )}

              <div className="hidden md:block w-full ">
                <div className="mt-2 text-sm md:text-lg font-semibold">
                  DESCRIPTION{" "}
                </div>
                <div className=" w-full">{`${product[0].description}`}</div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className=" w-full md:w-4/12 ">
            <div className=" md:hidden w-full">
              <div className="my-2 text-sm md:text-lg font-semibold ">
                DESCRIPTION{" "}
              </div>
              <p className="mb-4">{`${product[0].description}`}</p>
            </div>
          </div>
        </>
      )}

      <div
        id="nutriotionAndBenefits"
        className="md:flex justify-between md:py-4 md:my-8"
      >
        <div id="Nutrition" className="w-full md:w-4/12 ">
          <p className="text-sm md:text-lg md:my-2 md:p-4 font-semibold md:text-3xl ">
            NUTRITION FACTS
            <button
              className="md:hidden"
              onClick={() => setNutritionFact(!nutritionFacts)}
            >
              {" "}
              <MdArrowDropDown />{" "}
            </button>
          </p>

          {/* NUTRITIONISTS TABLE */}

          <table
            id="facts"
            className="hidden md:block mx-auto shadow-md w-fit p-4"
          >
            {/* HEADER */}
            <thead>
              <tr className="border-b">
                <th scope="col" className="px-6 py-2 text-left">
                  Principle
                </th>
                <th scope="col" className="px-6 py-2 text-left">
                  Nutrient Value/100g
                </th>
                <th scope="col" className="px-6 py-2 text-left">
                  Unit
                </th>
              </tr>
            </thead>

            {/* TBODY */}

            <tbody>
              {product[0].nutrition?.map((fact, i = 0) =>
                // CONDITION FOR NOT SHOWING ZERO VALUES
                fact[1] != false ? (
                  <tr
                    key={i++}
                    className="transition duration-300 ease-in-out hover:bg-gray-100 border-b"
                  >
                    {fact.map((item, j = 0) => (
                      <td
                        key={j++}
                        className="px-6 py-2 whitespace-nowrap text-sm"
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
        {nutritionFacts && (
          <table id="facts" className=" md:hidden mx-auto shadow-md w-fit p-4">
            {/* HEADER */}
            <thead>
              <tr className="border-b">
                <th scope="col" className="px-6 py-2 text-left">
                  Principle
                </th>
                <th scope="col" className="px-6 py-2 text-left">
                  Nutrient Value/100g
                </th>
                <th scope="col" className="px-6 py-2 text-left">
                  Unit
                </th>
              </tr>
            </thead>

            {/* TBODY */}
            <tbody>
              {product[0].nutrition?.map((fact, i = 0) =>
                // CONDITION FOR NOT SHOWING ZERO VALUES
                fact[1] != false ? (
                  <tr
                    key={i++}
                    className="transition duration-300 ease-in-out hover:bg-gray-100 border-b"
                  >
                    {fact.map((item, j = 0) => (
                      <td
                        key={j++}
                        className="px-6 py-2 whitespace-nowrap text-sm"
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        )}

        {/* BENEFITS */}

        {product[0].benefits?.length > 50 ? (
          <>
            <div id="benefits" className="py-4 w-8/12">
              <p className="md:p-2 text-sm md:text-lg font-semibold md:text-3xl">
                BENEFITS
                <button
                  className="md:hidden"
                  onClick={() => setBenefits(!benefits)}
                >
                  {" "}
                  <MdArrowDropDown />{" "}
                </button>
              </p>
              <div
                className="hidden md:block p-2"
                dangerouslySetInnerHTML={{ __html: product[0].benefits }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="pl-24 py-6">
              <p className="text-sm md:text-lg  font-semibold py-4 md:py-0">
                {"ABOUT "}{" "}
                {cat?.map((c) =>
                  c.id === Number(product[0].category) ? (
                    <span key={c.id}>{c.name}</span>
                  ) : null
                )}
                <button className="md:hidden" onClick={() => setAbout(!about)}>
                  {" "}
                  <MdArrowDropDown />{" "}
                </button>
              </p>
              <p className="hidden md:block">
                {cat?.map((c) =>
                  c.id === Number(product[0].category) ? (
                    <span>
                      {c.description ? c.description : "will update soon"}
                    </span>
                  ) : null
                )}
              </p>
            </div>

            {about && (
              <p className=" md:hidden">
                {cat?.map((c) =>
                  c.id === Number(product[0].category) ? (
                    <span>
                      {c.description ? c.description : "will update soon"}
                    </span>
                  ) : null
                )}
              </p>
            )}
          </>
        )}

        {benefits && (
          <div
            className=" md:hidden p-2"
            dangerouslySetInnerHTML={{ __html: product[0].benefits }}
          />
        )}
      </div>

      {/* YOU MAY ALSO LIKE */}
      <p className="text-3xl md:text-[38px] text-[#660100] m-4">
        You may also like
      </p>
      <YouMayLike />
    </div>
  ) : (
    <div className="w-full p-36">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* YOU MAY ALSO LIKE */}
      <p className=" md:text-[38px] text-[#660100] m-4">
        You may also like
      </p>
      <YouMayLike />
    </div>
  );
};

export default Details;

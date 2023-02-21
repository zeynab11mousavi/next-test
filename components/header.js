import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/Logo.jpg";
import logos from "../assets/logos/index";
import brands from "../assets/brands/index";

import { BiSearchAlt2 } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { site, products } from "../server/api";
import {
  achievementLogos,
  achievementMobileView,
  achievementStyle,
  achievementLogosMobileView,
  productMobileView,
  productStyle,
  navbarItemHover,
  eventsNew,
  brandMobileView,
} from "./tailwindstyles";

const Header = () => {
  const { IFS, SEDEX, KOSHER, USDA, FDA, ORGANIC, HALAL, KSTAR, FSSC } = logos;
  const { kindKids, majestic, peachFull, queen } = brands;

  const [menuToggle, setMenuToggle] = useState(false);
  const [product, setProduct] = useState(false);
  const [achievement, setAchievement] = useState(false);
  const [about, setAbout] = useState(false);
  const [bulk, setBulk] = useState(false);
  const [brand, setBrand] = useState(false);
  const [newsState, setNews] = useState(false);
  const [search, setSearch] = useState("");

  const closeMenues = () => {
    setProduct(false);
    setAbout(false);
    setAchievement(false);
    setBrand(false);
    setNews(false);
    setBulk(false);
    setMenuToggle(false);
  };

  return (
    <>
      {menuToggle ? (
        <div className="w-full block absolute bg-white md:hidden px-6 py-4 shadow-lg text-gray-500 z-50 ">
          <div className="flex w-full justify-between p-2 hover:text-red-300 ">
            <div
              id="PRODUCTS"
              onClick={() => setProduct(!product)}
              className="cursor-pointer"
            >
              PRODUCTS BULK/FOOD SERVICE
            </div>
            <button
              className="hover:shadow p-2 rounded transition duration-300 ease-in-out hover:text-red-300"
              onClick={() => closeMenues()}
            >
              <IoMdClose />
            </button>
          </div>

          {product && (
            <div className=" shadow-inner">
              <Link
                href={`${site}${products}/1&type=retail`}
                className={productMobileView}
              >
                SUN-DRIED <MdOutlineArrowRight />
              </Link>

              <Link
                href={`${site}${products}/2&type=retail`}
                className={productMobileView}
              >
                AIR-DRIED <MdOutlineArrowRight />
              </Link>
              <Link
                href={`${site}${products}/3&type=retail`}
                className={productMobileView}
              >
                FREEZE-DRIED <MdOutlineArrowRight />
              </Link>
              <Link
                href={`${site}${products}/4&type=retail`}
                className={productMobileView}
              >
                NUTS <MdOutlineArrowRight />
              </Link>
              <Link
                href={`${site}${products}/5&type=retail`}
                className={productMobileView}
              >
                SAFFRON <MdOutlineArrowRight />
              </Link>
            </div>
          )}

          <div className="flex p-2 hover:text-red-300">
            <div onClick={() => setBulk(!bulk)} className="cursor-pointer">
              PRODUCTS PRIVATE LABLE
            </div>
          </div>
          {/* BULK PRODUCT TOGGLE  */}

          {bulk && (
            <div className="shadow-inner">
              <Link
                href={`${site}${products}/1&type=bulk`}
                className={productMobileView}
              >
                SUN-DRIED <MdOutlineArrowRight />
              </Link>

              <Link
                href={`${site}${products}/2&type=bulk`}
                className={productMobileView}
              >
                AIR-DRIED <MdOutlineArrowRight />
              </Link>
              <Link
                href={`${site}${products}/3&type=bulk`}
                className={productMobileView}
              >
                FREEZE-DRIED <MdOutlineArrowRight />
              </Link>
              <Link
                href={`${site}${products}/4&type=bulk`}
                className={productMobileView}
              >
                NUTS <MdOutlineArrowRight />
              </Link>
              <Link
                href={`${site}${products}/5&type=bulk`}
                className={productMobileView}
              >
                SAFFRON <MdOutlineArrowRight />
              </Link>
            </div>
          )}

          <div className="flex p-2 hover:text-red-300 text-gray-500">
            <div
              onClick={() => setAchievement(!achievement)}
              className="cursor-pointer"
            >
              ACHIEVEMENTS
            </div>
          </div>
          {/* ACHIVEMENT TOGGLE  */}

          {achievement && (
            <div className="shadow-inner">
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={IFS}
                  alt={"IFS"}
                  className={achievementLogosMobileView}
                />
                International Featured Standard
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={SEDEX}
                  alt={"SEDEX"}
                  className={achievementLogosMobileView}
                />
                Supplier Ethical Data Exchange
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={KOSHER}
                  alt={"KOSHER CERTIFIED"}
                  className={achievementLogosMobileView}
                />
                KOSHER CERTIFIED
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={USDA}
                  alt={"USDA ORGANIC"}
                  className={achievementLogosMobileView}
                />
                USDA ORGANIC
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={FDA}
                  alt={"Food and Drug Administration"}
                  className={achievementLogosMobileView}
                />
                Food and Drug Administration
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={ORGANIC}
                  alt={"ORGANIC"}
                  className={achievementLogosMobileView}
                />
                ORGANIC
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={HALAL}
                  alt={"HALAL CERTIFIED"}
                  className={achievementLogosMobileView}
                />
                HALAL CERTIFIED
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={KSTAR}
                  alt={"K-STAR"}
                  className={achievementLogosMobileView}
                />
                Korea Superconducting Tokamak Advanced Research Food Safety
                System Certification
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={FSSC}
                  alt={"FSSC"}
                  className={achievementLogosMobileView}
                />
                Food Safety System Certification
              </Link>
            </div>
          )}

          <div className="flex p-2 hover:text-red-300">
            <div onClick={() => setBrand(!brand)} className="cursor-pointer">
              BRANDS
            </div>
          </div>
          {/* BRAND TOGGLE  */}
          {brand && (
            <div className="shadow-inner">
              <Link href={`#`} className={brandMobileView}>
                <Image src={majestic} alt="majestic" className="w-16 mx-auto" />
                MAJESTIC
              </Link>
              <Link href={`#`} className={brandMobileView}>
                <Image
                  src={peachFull}
                  alt="peachFull"
                  className="w-16 mx-auto"
                />
                PEACH FULL
              </Link>
              <Link href={`#`} className={brandMobileView}>
                <Image src={kindKids} alt="kindKids" className="w-16 mx-auto" />
                KIND KIDS
              </Link>
              <Link href={`#`} className={brandMobileView}>
                <Image src={queen} alt="queen" className="w-16 mx-auto" />
                QUEEN DIAMOND
              </Link>
            </div>
          )}

          <div className="flex p-2 hover:text-red-300">
            <div onClick={() => setNews(!newsState)} className="cursor-pointer">
              NEWS AND EVENTS
            </div>
          </div>

          {/* EVENTS AND NEWS TOGGLE  */}
          {newsState && (
            <div className="shadow-inner">
              <Link href={`${site}eventNewsPage`} className={eventsNew}>
                Events
              </Link>

              <Link href={`${site}eventNewsPage`} className={eventsNew}>
                News
              </Link>
            </div>
          )}

          <div className="flex p-2 hover:text-red-300 ">
            <div onClick={() => setAbout(!about)} className="cursor-pointer">
              ABOUT US
            </div>
          </div>

          {/* ABOUT TOGGLE  */}
          {about && (
            <div className="shadow-inner">
              <a href={`${site}about-us`} className={productMobileView}>
                ABOUT US
              </a>

              <a href={`${site}factories`} className={productMobileView}>
                FACTORIES
              </a>

              <a
                href={`${site}quality-food-safety`}
                className={productMobileView}
              >
                QUALITY AND FOOD SAFETY
              </a>
              <a href={`${site}custom-packing`} className={productMobileView}>
                CUSTOM PACKING
              </a>
              <a
                href={`${site}research-development`}
                className={productMobileView}
              >
                R & D
              </a>
              <a href={`${site}FQA`} className={productMobileView}>
                FQA
              </a>
              <a href={`${site}question-form`} className={productMobileView}>
                Contact Us
              </a>
            </div>
          )}
        </div>
      ) : null}

      <nav className="flex py-1 px-6 items-center shadow-md md:fixed top-0 left-0 right-0 bg-white z-50 md:mb-[150px]">
        <Link href={site}>
          <Image src={Logo} alt="AHT FOODS" className="w-20 md:w-36 lg:w-40" />
        </Link>

        <div
          className="justify-between md:justify-start w-11/12 md:h-24 bg-gradient-to-t from-[#7F0019] to-[#8A0019] 
                rounded-md md:rounded-l lg:rounded-2xl flex flex-row items-center p-4 border"
        >
          {/* NAVIGATION LINKS */}
          <div className=" w-7/12 md:w-10/12 hidden md:flex flex-row items-center text-white text-small lg:text-base ">
            <div className={navbarItemHover}>
              <div className="flex-col items-center">
                <div className="flex items-center w-full">
                  {" "}
                  PRODUCTS{" "}
                  <span className="hidden lg:block text-xs ml-2"> ⯆ </span>
                </div>
                <div className="text-xs">BULK/FOOD SERVICE</div>
              </div>
              <div className="invisible text-xs absolute z-50 flex w-[150px] flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover: w-48 rounded">
                <Link
                  href={`${site}${products}/1&type=bulk`}
                  className={productStyle}
                >
                  SUN-DRIED <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/2&type=bulk`}
                  className={productStyle}
                >
                  AIR-DRIED <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/3&type=bulk`}
                  className={productStyle}
                >
                  FREEZE-DRIED <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/4&type=bulk`}
                  className={productStyle}
                >
                  NUTS <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/5&type=bulk`}
                  className={productStyle}
                >
                  SAFFRON <MdOutlineArrowRight />
                </Link>
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className="flex-col items-center">
                <div className="flex items-center w-fit">
                  {" "}
                  PRODUCTS{" "}
                  <span className="hidden lg:block text-xs ml-2"> ⯆ </span>
                </div>
                <div className="text-xs">PRIVATE LABEL</div>
              </div>
              <div className="invisible text-xs absolute z-50 flex w-[150px] flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover: w-48 rounded">
                <Link
                  href={`${site}${products}/1&type=retail`}
                  className={productStyle}
                >
                  SUN-DRIED <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/2&type=retail`}
                  className={productStyle}
                >
                  AIR-DRIED <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/3&type=retail`}
                  className={productStyle}
                >
                  FREEZE-DRIED <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/4&type=retail`}
                  className={productStyle}
                >
                  NUTS <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`${site}${products}/5&type=retail`}
                  className={productStyle}
                >
                  SAFFRON <MdOutlineArrowRight />
                </Link>
              </div>
            </div>

            <div className="m-2.5 group relative cursor-pointer  ">
              <div className="flex items-center ">
                ACHIEVEMENTS{" "}
                <span className="hidden lg:block text-xs ml-2"> ⯆ </span>
              </div>
              <div className="h-[600px]  invisible items-start text-xs absolute z-50 flex w-[300px] flex-col bg-white  p-4 text-gray-800 shadow-xl group-hover:visible group-hover: w-56 rounded">
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={IFS}
                    alt={"IFS"}
                    className="w-[45px] mx-auto mx-2"
                  />
                  International Featured Standard
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={SEDEX}
                    alt={"SEDEX"}
                    className={achievementLogos}
                  />
                  Supplier Ethical Data Exchange
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={KOSHER}
                    alt={"KOSHER CERTIFIED"}
                    className={achievementLogos}
                  />
                  KOSHER CERTIFIED
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={USDA}
                    alt={"USDA ORGANIC"}
                    className={achievementLogos}
                  />
                  USDA ORGANIC
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={FDA}
                    alt={"Food and Drug Administration"}
                    className={achievementLogos}
                  />
                  Food and Drug Administration
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={ORGANIC}
                    alt={"ORGANIC"}
                    className={achievementLogos}
                  />
                  ORGANIC
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={HALAL}
                    alt={"HALAL CERTIFIED"}
                    className={achievementLogos}
                  />
                  HALAL CERTIFIED
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={KSTAR}
                    alt={"K-STAR"}
                    className={achievementLogos}
                  />
                  Korea Superconducting Tokamak Advanced Research
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image src={FSSC} alt={"FSSC"} className={achievementLogos} />
                  Food Safety System Certification
                </Link>
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className="flex items-center">
                BRANDS <span className="hidden lg:block text-xs ml-2"> ⯆ </span>
              </div>
              <div className="invisible text-xs absolute z-50 flex w-fit flex-col bg-white py-1 px-6 text-gray-800 shadow-xl group-hover:visible group-hover: w-48 rounded">
                <Link href={`#`} className={brandMobileView}>
                  <Image
                    src={majestic}
                    alt="majestic"
                    className="w-16 mx-auto"
                  />
                  MAJESTIC
                </Link>
                <Link href={`#`} className={brandMobileView}>
                  <Image
                    src={peachFull}
                    alt="peachFull"
                    className="w-16 mx-auto"
                  />
                  PEACH FULL
                </Link>
                <Link href={`#`} className={brandMobileView}>
                  <Image
                    src={kindKids}
                    alt="kindKids"
                    className="w-16 mx-auto"
                  />
                  KIND KIDS
                </Link>
                <Link href={`#`} className={brandMobileView}>
                  <Image src={queen} alt="queen" className="w-16 mx-auto" />
                  QUEEN DIAMOND
                </Link>
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className="flex items-center text-xs lg:text-base">
                EVENTS & NEWS{" "}
                <span className="hidden lg:block text-xs ml-2"> ⯆ </span>
              </div>
              <div className="invisible text-xs absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover: w-48 rounded">
                <Link href={`${site}eventNewsPage`} className={productStyle}>
                  Events
                </Link>

                <Link href={`${site}eventNewsPage`} className={productStyle}>
                  News
                </Link>
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className="flex items-center text-xs lg:text-base ">
                ABOUT US{" "}
                <span className="hidden lg:block text-sm ml-2"> ⯆ </span>
              </div>
              <div className="invisible text-xs absolute z-50 flex w-[150px] flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover: w-48 rounded">
                <a className={productStyle} href={`${site}about-us`}>
                  ABOUT US
                </a>

                <a className={productStyle} href={`${site}factories`}>
                  FACTORIES
                </a>

                <a className={productStyle} href={`${site}quality-food-safety`}>
                  QUALITY AND FOOD SAFETY
                </a>
                <a className={productStyle} href={`${site}custom-packing`}>
                  CUSTOM PACKING
                </a>
                <a
                  className={productStyle}
                  href={`${site}research-development`}
                >
                  R & D
                </a>
                <a className={productStyle} href={`${site}FQA`}>
                  FQA
                </a>
                <a className={productStyle} href={`${site}question-form`}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className=" w-6/12 flex md:hidden lg:flex lg:w-3/12 h-5 lg:h-8 border border-solid border-white rounded-3xl  items-center px-2 lg:px-4 py-1">
            <div className="cursor-pointer text-white md:text-2xl mr-1">
              <BiSearchAlt2 onClick={() => handleSearch()} />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-7/12 text-white text-xs md:text-base border-none bg-[#7F0019] "
              placeholder="Search Products..."
            />
          </div>

          {/* SEARCH FOR MEDIUM SIZE */}
          <div className="hidden md:block md:w-2/12 lg:hidden ">
            <div className="text-white text-2xl mr-1 w-full flex justify-end">
              <BiSearchAlt2 />
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="text-white hidden md:w-2/12 md:flex justify-evenly md:text-2xl lg:text-4xl ">
            <a href="https://www.instagram.com/ahtfoods/" target="_blanket">
              <FaInstagram className="cursor-pointer" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=989123865564&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp className="cursor-pointer" />
            </a>
            <a href="mailto:info@ahtfoods.com? subject= subject text">
              <CgMail className="cursor-pointer" />
            </a>
          </div>

          {/* HAMBERGER MENU */}
          <div
            className=" block text-white text-xl md:hidden cursor-pointer"
            onClick={() => setMenuToggle(true)}
          >
            <TiThMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

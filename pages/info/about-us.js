import aboutPic from "@/assets/about/about";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-10/12 mx-auto my-8 md:mt-48 ">
      <Head>
        <title>AHT | ABOUT</title>
      </Head>
      <div className="w-full md:flex items-center justify-around my-4">
        <div className="w-full md:w-8/12 ">
          <p className="text-2xl md:text-3xl my-4">ABOUT AHT</p>
          AHT is a well-trusted family-owned private company since 1963. As the
          most diverse Iranian IFS, FSSC 22000, KOSHER, HALAL certified and
          SEDEX member dried fruit and nuts supplier, is covering five
          continents with the most premium quality of Raisins, Sultanas, Dates
          and Dates&apos; products, Saffron, and Pistachios.
        </div>
        <Image
          width={1000}
          height={700}
          className="w-full md:w-3/12"
          src={aboutPic.one}
          alt="aht award"
        />
      </div>
      <div className="w-full md:flex my-4 justify-around md:mt-8">
        <Image
          width={1000}
          height={700}
          className="w-full md:w-3/12"
          src={aboutPic.two}
          alt="aht"
        />
        <p className="w-full md:w-8/12 ">
          As part of our responsibility and commitments, we design safety and
          sustainability into our products and manufacturing processes. Handpick
          products are going to be harvested at their best. Each AHT&apos;s
          supplied product goes through multiple stages of quality checks and
          ensures that only the best ones are available for end consumers. We
          maintain fully automated plants and factories with proper quality
          control systems completely complying with GFSI standards. We are
          taking every precaution that the quality of our goods to be maintained
          as FIRST-CLASS. We are honoured to receive prestigious awards as the
          Best Iranian Dried Fruit Exporter by the “Ministry of Commerce” and
          “Trade Promotion Organization of Iran” for eight years in a row.
        </p>
      </div>
    </div>
  );
};

export default About;

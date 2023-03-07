import map from "../../assets/factories/map.jpg";
import factories from "../../assets/factories/index.js";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const Factories = () => {
  const [images, setImage] = useState([]);

  useEffect(() => {
    setImage(Object.keys(factories));
  }, []);

  return (
    <div className="my-8 md:mt-48 text-lg w-full">
      <Head>
        <title>AHT | Factories</title>
      </Head>
      <div className="w-10/12 mx-auto ">
        <div className="w-full  md:flex">
          <div className="w-full md:w-8/12">
            <h1 className="tex-xl md:text-2xl mb-6 text-[#660100]">
              AHT FACTORIES
            </h1>
            <div className="text-[#7D2F2F]">
              <p>
                AHT as a well-trusted Iranian IFS, FSSC 22000, KOSHER, HALAL
                certified and SEDEX member is one of the main and the oldest
                dried
              </p>
              <p>
                fruit and nuts manufacturer. Our factories fully equipped with a
                wide variety of brand new technology and types of machinery like
                laser Sorter, X-Ray Scanner, inline and online Metal Detector,
                automatic pitting machine, hair-burner etc.
              </p>
              <p>
                We also have an extensive range of quality control machinery and
                facilities to carry out intensive quality control for all kinds
                of our products from hand-picking the raw material harvested at
                their best to final quality control every stage of the
                manufacturing process takes place within our factory where we
                can guarantee the highest standard of production and meet our
                customers satisfaction.
              </p>
              <p>
                Meanwhile, major investments and efforts made for organic
                products and there is good news about the organic certificate on
                the way.
              </p>
            </div>
          </div>
          <Image className="w-full md:w-4/12" src={map} alt="aht-export" />
        </div>

        <div className="my-8 grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <Image src={factories[1]} alt="AHR-FACTORY" />
          <Image src={factories[2]} alt="AHR-FACTORY " />
          <Image src={factories[3]} alt="AHR-FACTORY" />
          <Image src={factories[4]} alt="AHR-FACTORY" />
          <Image src={factories[5]} alt="AHR-FACTORY" />
          <Image src={factories[6]} alt="AHR-FACTORY" />
          <Image src={factories[7]} alt="AHR-FACTORY" />
          <Image src={factories[8]} alt="AHR-FACTORY" />
          <Image src={factories[9]} alt="AHR-FACTORY" />
          <Image src={factories[10]} alt="AHR-FACTORY" />
          <Image src={factories[11]} alt="AHR-FACTORY" />
          <Image src={factories[12]} alt="AHR-FACTORY" />
          <Image src={factories[13]} alt="AHR-FACTORY" />
          <Image src={factories[14]} alt="AHR-FACTORY" />
          <Image src={factories[15]} alt="AHR-FACTORY" />
          <Image src={factories[16]} alt="AHR-FACTORY" />
          <Image src={factories[17]} alt="AHR-FACTORY" />
          <Image src={factories[18]} alt="AHR-FACTORY" />
          <Image src={factories[19]} alt="AHR-FACTORY" />
          <Image src={factories[20]} alt="AHR-FACTORY" />
          <Image src={factories[21]} alt="AHR-FACTORY" />
          <Image src={factories[22]} alt="AHR-FACTORY" />
          <Image src={factories[23]} alt="AHR-FACTORY" />
          <Image src={factories[24]} alt="AHR-FACTORY" />
          <Image src={factories[25]} alt="AHR-FACTORY" />
          <Image src={factories[26]} alt="AHR-FACTORY" />
        </div>
      </div>
    </div>
  );
};

export default Factories;

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { api, events, path, site } from "config/api";
import { useEffect } from "react";
import { NewInstance } from "api/http";
import { useState } from "react";
const Footer = () => {

  const [footerEvent, setFooterEvent] = useState([])

  useEffect(() => {
    NewInstance.get(`${api}${events}/?&_limit=1`).then((res) => setFooterEvent((res.data)[0]));

  }, [])
  return (
    <footer className=" bg-gradient-to-t from-[#7F0019] to-[#8A0019] text-white px-10 md:px-16 pt-8 md:px-32">
      <div id="socialMedia" className="mb-8">
        <p className=" md:lg lg:text-xl my-2 "> JOIN AND CONTACT US</p>
        <div
          id="socialMedia-icons"
          className="flex text-2xl lg:text-3xl "
        >
          <a href="https://www.instagram.com/ahtfoods/" target="_blank">
            <FaInstagram className="mr-4 transition duration-300 ease-in-out hover:text-red-100" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=989123865564&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp className="mr-4 transition duration-300 ease-in-out hover:text-red-100 " />
          </a>
          <a href="mailto:info@ahtfoods.com? subject= subject text">
            <CgMail className="mr-4 transition duration-300 ease-in-out hover:text-red-100" />
          </a>
        </div>
      </div>
      <div className="pb-6 border-b md:border[#F8F8F8]">
        <div id="footerParts" className=" md:flex ">
          <div className=" md:border-r md:border[#F8F8F8] md:pr-28 md:mr-8 mt-8 md:m1 pt-4">
            <h4 className="text-sm md:base lg:text-lg">AHT HEAD OFFICE </h4>
            <div className=" text-xs md:text-sm my-2">
              20 Mohri St., North Valiasr Ave.
              <br />
              Tehran 1966783661, Iran
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href="tell:+982126217316">(+98 21) 26217316-9</a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href="tell:+989123865560">(+98) 9123865564</a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href="tell:+982126217320">
                  (+98 21) 26217320 ext: 124 or 125
                </a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href="mailto:info@ahtfoods.com? subject= subject text">
                  info@ahtfoods.com
                </a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href="mailto:info@aht.ir? subject= subject text">
                  info@aht.ir
                </a>
              </p>
            </div>
          </div>

          <div className=" md:border-r md:border[#F8F8F8] pr-32 w-64 mt-8 md:m1 pt-4">
            <p className="text-lg">QUICK LINKS</p>
            <div className="text-sm">
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href={`/info/question-form`}>Contact us</a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href={`/info/custom-packing`}>Custom Packing</a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href={`/info/FQA`}>FQA</a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href={`/info/about-us`}>About Us</a>
              </p>
              <p className="my-2 transition duration-300 ease-in-out hover:text-red-100">
                <a href={`/info/factories`}>Factories</a>
              </p>
            </div>
          </div>

          <div className=" md:border-r md:border[#F8F8F8] w-fit md:px-8 md:mr-8 mt-8 md:m1 pt-4">
            <p className="mb-4 text-sm md:base ">SUBSCRIBE TO NEWSLETTER</p>
            <div className="flex flex-col md:justify-around md:items-center">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-white px-7 py-2 rounded-xl w-11/12 placeholder-red-300 text-xs md:text-sm my-2 md:my-6"
              />
              <input
                type="submit"
                placeholder="SUBMIT"
                className="bg-white px-auto py-2 rounded-xl my-4 w-11/12 text-red-900 my-2 md:my-6 transition duration-300 ease-in-out hover:bg-red-50"
              />
            </div>
          </div>

          <div className="mt-8 md:m1 pt-4">
            <p className="mb-4 ">UPCOMING EVENTS</p>

            <div>
              <img
                src={`${path}${footerEvent.image}`}
                alt={`${footerEvent.title}`}
                className="rounded-sm w-8/12 md:w-full"
              />
            </div>
            <p className="text-xs w-8/12 md:text-sm mt-2 transition duration-300 ease-in-out hover:text-red-100">

              {footerEvent.subTitle}

            </p>
          </div>
        </div>
      </div>
      <p className="text-center py-4 text-xs md:text-sm lg:">
        © AHT 2023
      </p>
    </footer>
  );
};

export default Footer;
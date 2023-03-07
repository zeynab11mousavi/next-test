import { NewInstance } from "api/http";
import { api } from "config/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaFax, FaWhatsapp } from "react-icons/fa";

const QuestionForm = () => {
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [activeBtn, setActiveBtn] = useState(true);
  const checked = false;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await NewInstance.post(`${api}messages`, {
        name,
        message,
        email,
        subject,
        checked,
      }).then((res) => {
        toast.success(
          "Thank you for your message. We will contact you as soon as possible :)"
        );
      });
    } catch (err) {
      toast.error("Something went wrong! please try again later");
    }

    setEmail("");
    setMessage("");
    setName("");
    setSubject("");
  };
  return (
    <>
      <Head>
        <title>AHT | contact us</title>
      </Head>

      <ToastContainer />

      <div className="md:w-8/12 md:mt-48 text-center mx-auto px-6">
        <div className="w-[100%] my-4 text-2xl md:text-3xl text-gray-700">
          GET IN TOUCH!
        </div>

        <div className="text-gray-600 text-sm md:text-base">
          Please do not hesitate to contact us in case of any questions or price
          inquiry, a whole team is at your disposal 24/7. Your questions and
          comments are important to us.
        </div>
      </div>

      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-16 px-6 md:px-0 shadow-sm p-8">
        <div className="h-28 flex p-6  w-fit md:w-full my-2">
          <div className="w-[40px] h-[40px] bg-[#8A0019] text-white hover:text-[#8A0019] hover:bg-white transition ease-in-out duration-500 hover:shadow-sm p-2 rounded-[100%] flex justify-center items-center mr-4 text-2xl">
            <MdLocationPin />
          </div>
          <div>
            <h3 className="text-large md:text-2xl text-gray-700"> Location:</h3>
            <p className="text-gray-500 my-2">
              20 Mohri St., North Valiasr Ave.,Tehran 1966783661, Iran
              <a
                className="ml-2 text-gray-600"
                href="https://www.google.com/maps/place/AHT/@35.7864659,51.4160639,15z/data=!4m2!3m1!1s0x0:0xda421170d6e0be7c"
              >
                GoogleMap
              </a>
            </p>
          </div>
        </div>
        <div className="h-28 flex p-6  w-fit md:w-full my-2">
          <div className="w-[40px] h-[40px] bg-[#8A0019] text-white hover:text-[#8A0019] hover:bg-white transition ease-in-out duration-500 hover:shadow-sm p-2 rounded-[100%] flex justify-center items-center mr-4 text-2xl">
            <MdEmail />
          </div>
          <div>
            <h3 className="text-large md:text-2xl text-gray-700">Email:</h3>
            <p className="text-gray-500 my-2">
              <a href="mailto:info@aht.ir? subject= subject text">
                info@aht.ir
              </a>
              <br />
              <a href="mailto:info@ahtfoods.com? subject= subject text">
                info@ahtfoods.com
              </a>
            </p>
          </div>
        </div>
        <div className="h-28 flex p-6 w-fit md:w-full my-2">
          <div className="w-[40px] h-[40px] bg-[#8A0019] text-white hover:text-[#8A0019] hover:bg-white transition ease-in-out duration-500 hover:shadow-sm p-2 rounded-[100%] flex justify-center items-center mr-4 text-2xl">
            <BsTelephone />
          </div>
          <div>
            <h3 className="text-large md:text-2xl text-gray-700">Call:</h3>
            <p className="text-gray-500 my-2">
              <a href="tell:+989121112867">(+98) 9121112867</a>
              <br />
              <a href="tell:+982126217316-9">(+98 21) 26217316-9</a>
            </p>
          </div>
        </div>
        <div className="h-28 flex p-6 w-fit md:w-full my-2">
          <div className="w-[40px] h-[40px] bg-[#8A0019] text-white hover:text-[#8A0019] hover:bg-white transition ease-in-out duration-500 hover:shadow-sm p-2 rounded-[100%] flex justify-center items-center mr-4 text-2xl">
            <RiCustomerService2Fill />
          </div>
          <div>
            <h3 className="text-large md:text-2xl text-gray-700">
              24/7 Online:
            </h3>
            <p className="text-gray-500 my-2">
              SAT – THU 8:00 – 18:00 IRST
              <br />
              (GMT +3:30) Friday is the weekend in Iran .
            </p>
          </div>
        </div>
        <div className="h-28 flex p-6 w-fit md:w-full my-2">
          <div className="w-[40px] h-[40px] bg-[#8A0019] text-white hover:text-[#8A0019] hover:bg-white transition ease-in-out duration-500 hover:shadow-sm p-2 rounded-[100%] flex justify-center items-center mr-4 text-2xl">
            <FaFax />
          </div>
          <div>
            <h3 className="text-large md:text-2xl text-gray-700">Fax:</h3>
            <p className="text-gray-500 my-2">(+98 21) 26217320</p>
          </div>
        </div>
        <div className="h-28 flex p-6 w-fit md:w-full">
          <div className="w-[40px] h-[40px] bg-[#8A0019] text-white hover:text-[#8A0019] hover:bg-white transition ease-in-out duration-500 hover:shadow-sm p-2 rounded-[100%] flex justify-center items-center mr-4 text-2xl">
            <FaWhatsapp />
          </div>
          <div>
            <h3 className="text-large md:text-2xl text-gray-700">Whatsapp:</h3>
            <p className="text-gray-500">(+98) 9123865564</p>
          </div>
        </div>
      </div>

      <form
        // onSubmit={() => handleSubmit()}
        action="mailto:zb.mv01@gmail.com"
        method="post"
        enctype="text/plain"
        className=" rounded-md w-full md:w-8/12 py-16 mx-auto flex justify-center items-center md:mt-36"
      >
        <div className="w-8/12 ">
          <p className="text-gray-700 md:text-lg">
            Please fill out the quick form and we will be in touch with
            lightning speed.
          </p>
          <div className="my-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="  h-8 rounded-md p-6 border-2 border-stone-200 focus:border-gray-400"
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="my-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" h-8 border-2 border-stone-200 focus:border-gray-400 rounded-md p-6"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="my-4 ">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className=" w-[100%] h-8 border-2 border-stone-200 focus:border-gray-400 rounded-md p-6"
              placeholder="Subject"
              type="text"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div className="my-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" w-[100%] h-32 border-2 border-stone-200 focus:border-gray-400 rounded-md p-6"
              placeholder="Message"
              type="text"
              name="message"
              id="message"
              required
            />
          </div>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={() => setActiveBtn(false)}
          />

          <input
            className="w-[50%] bg-red-50 p-4 rounded-md mx-auto transition my-4 duration-300 ease-in-out  text-gray-600 hover:text-gray-800"
            type="submit"
            value="Send"
          />

          {/* <button
            disabled={activeBtn}
        //     type="submit"
        // onClick={(e) => handleSubmit(e)}

            className="w-[50%] bg-gradient-to-l from-gray-200 to-white p-4 rounded-md mx-auto transition my-4 duration-300 ease-in-out  text-gray-600 hover:text-gray-800"
          >
            Submit
          </button> */}
        </div>
      </form>
    </>
  );
};

export default QuestionForm;

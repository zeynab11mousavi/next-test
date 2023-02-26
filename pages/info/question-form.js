import { NewInstance } from "api/http";
import { api } from "config/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

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
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-gradient-to-r from-red-300 to-red-100 rounded-md w-full md:w-8/12 py-16 bg-red-50 mx-auto flex justify-center items-center md:mt-36">
      <ToastContainer />
      <div className="w-8/12 ">
        <div className="my-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" w-[100%] h-8 rounded-md p-6"
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
            className=" w-[100%] h-8 rounded-md p-6"
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
            className=" w-[100%] h-8 rounded-md p-6"
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
            className=" w-[100%] h-32 rounded-md p-6"
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

        <button
          disabled={activeBtn}
          type="submit"
          className="w-[50%] bg-gradient-to-l from-gray-200 to-white p-4 rounded-md mx-auto transition my-4 duration-300 ease-in-out  text-gray-600 hover:text-gray-800">
          Submit
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;

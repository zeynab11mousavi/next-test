import { useState } from "react";
import { useEffect } from "react";
import { api, path } from "config/api";
import { NewInstance } from "api/http";
import { useRouter } from "next/router";
import NewsSideNavigation from "@/components/newsSideNavigation";
import Head from "next/head";

const Newsletters = () => {
  const router = useRouter();
  const { news } = router.query;
  const [newsletter, setNewsletter] = useState([{}]);

  useEffect(() => {
    NewInstance.get(`${api}news?title=${news}`).then((res) =>
      setNewsletter(res.data)
    );
  }, [news]);

  return (
    <div className="md:flex md:mt-36">
      <Head>
        <title>AHT | EVENTS AND NEWS</title>
      </Head>
      {newsletter.length > 0 ? (
        <div className=" w-full md:w-9/12  mx-auto md:flex md:my-8  justify-around text-gray-900 p-8 ">
          <div className="md:w-6/12 mt-6" id="picture">
            <img
              className="rounded-md sticky right-0 md:top-48 shadow-sm"
              src={`${path}${newsletter[0].image}`}
              alt={newsletter[0].title}
            />
          </div>
          <div className="p-4 md:w-8/12" id="information">
            <h3 className="text-lg md:text-2xl text-[#660100] mb-6" id="latest">
              {newsletter[0].title}
            </h3>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: newsletter[0].text }}
            />
          </div>
        </div>
      ) : (
        // LOADING ANIMATION
        <div class="lds-spinner md:mt-48">
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
      )}

      {/* NEWS AND EVENTS */}
      <NewsSideNavigation />
    </div>
  );
};

export default Newsletters;

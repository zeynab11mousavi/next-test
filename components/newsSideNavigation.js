import { NewInstance } from "@/api/http";
import { api, news, site } from "@/config/api";
import Link from "next/link";
import { useState, useEffect } from "react";

const NewsSideNavigation = () => {
  const [newsArr, setNewsArr] = useState([]);

  useEffect(() => {
    NewInstance.get(`${api}${news}`).then((res) => setNewsArr(res.data));
  }, []);
  return (
    <div className="shadow-md md:w-[350px] sticky left-0 top-48 h-fit p-6 md:[w-150px] mr-4">
      <div id="events" className="w-full mx-auto mt-8 md:mt-0 ">
        <div className=" text-[#7D2F2F] mb-0 mx-4">News letters</div>
        {newsArr?.map((item, i=0) => (
        <div key={i++} className="transition ease-in-out text-gray-700 duration-300 hover:text-red-400 my-4">
          <Link href={`/event-news/${item.title}`}>{item.title}</Link>

        </div>
      ))}
      </div>
    </div>
  );
};

export default NewsSideNavigation;

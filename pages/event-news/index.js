import { NewInstance } from "@/api/http";
import EventsSideNavigation from "@/components/eventsSideNavigation";
import { api, news, path, site } from "@/config/api";
import Link from "next/link";
import { useState, useEffect } from "react";

const EventsNews = () => {
  const [newsArr, setNewsArr] = useState([]);
  useEffect(() => {
    NewInstance.get(`${api}${news}`).then((res) => setNewsArr(res.data));
  }, []);

  return (
    <div className=" md:flex justify-center md:mt-40 text-[#7D2F2F]">
      <div className="w-full md:w-8/12 mx-auto mt-8">
        <h1 className="text-lg md:text-2xl ml-8">AHT NEWSLETTERS</h1>
        {newsArr.length > 0
          ? newsArr.map((index) => (
              <Link href={`/event-news/${index.title}` } key={index.id} className="w-full p-4 flex border-b-2 border-gray-50 mt-4">

                <div className="w-3/12 h-auto rounded-lg flex justify-center items-center ">
                  <img src={path + index.image} alt={index.title}  className="w-full"/>
                </div>

                <div className="w-9/12 p-4  text-ellipsis overflow-hidden">
                  <h1 className="md:text-xl text-[#660100]">{index.title}</h1>
                  <div
                    className="h-36 text-ellipsis overflow-hidden "
                    dangerouslySetInnerHTML={{ __html: index.text }}
                  />
                </div>
              </Link>
            ))
          : null}
      </div>

        <EventsSideNavigation />
    </div>
  );
};

export default EventsNews;

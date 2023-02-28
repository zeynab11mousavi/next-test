import { NewInstance } from "@/api/http";
import { api, events} from "@/config/api";
import { useEffect, useState } from "react";

const EventsSideNavigation = () => {
  const [eventsArr, setEventsArr] = useState([]);

  useEffect(() => {
    NewInstance.get(`${api}${events}`).then((res) => setEventsArr(res.data));
  }, []);
  return (
    <div
      className=" w-fit mx-auto sticky left-0 top-0 h-fit p-6 "
    >
    
    <div id="events" className="w-full mx-auto mt-8 md:mt-0 ">
          <div className="md:text-2xl text-[#7D2F2F] mb-0 m-4">
            {" "}
            EVENTS
          </div>
          <div id="news" className="h-[300px] ">
            {(eventsArr.length > 0) ? eventsArr?.map((i, index = 0) => (
                <div key={index++}>
              <div
                
                className="flex w-[350px] h-[150px] border-b shadow-sm items-center px-2 py-4 m-4 md:m-0"
              >
                <div className="  bg-[#7D2F2F] text-white w-16 h-16 text-center pt-2 m-2 rounded-lg">
                  {i.date}
                </div>
                <div className="felx-col justifuy-between  w-9/12 m-2">
                  <p className="text-lg md:text-2xl text-[#7D2F2F]">
                    {i.title}
                  </p>
                  <p
                    href="#"
                    className="text-sm md:text-base h-16  text-[#A54646]"
                  >
                    {i.subTitle}
                  </p>
                </div>
              </div>
              </div>

            )) : null }
          </div>
        </div>
    </div>
  );
};

export default EventsSideNavigation;

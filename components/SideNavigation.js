import { site, subcategory } from "@/config/api";
import Link from "next/link";

const SideNavigation = () => {
  const subArr = [
    ["Apple", 9],
    ["Apricot", 12],
    ["Banana", 16],
    ["Barberries", 19],
    ["Bell Pepper", 4],
    ["Broccoli", 20],
    ["Date", 13],
    ["Fig", 15],
    ["Green Beans", 7],
    ["Green Onion", 22],
    ["Kiwi", 10],
    ["Mushroom", 2],
    ["Okra", 5],
    ["Onion", 21],
    ["Orange", 8],
    ["Peach", 11],
    ["Pistachio", 1],
    ["Pumpkin", 21],
    ["Raisin", 14],
    ["Saffron", 18],
    ["Strawberry", 17],
    ["Tomato", 6],
    ["Zucchini", 3],
  ];
  return (
    <div
      id="shortNavigation"
      className="shadow-sm text-[10px] md:text-base lg:w-[230px] sticky left-0 top-0 h-fit p-2 md:p-6 mx-auto"
    >
      {subArr?.map((item, i = 0) => (
        <div
          key={++i}
          className="transition ease-in-out duration-300 hover:text-red-400 "
        >
          <Link href={`${site}products/${subcategory}/${item[1]}`}>{item[0]}</Link>
        </div>
      ))}
    </div>
  );
};

export default SideNavigation;



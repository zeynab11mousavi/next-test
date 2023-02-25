import { NewInstance } from "@/api/http";
import { api, site, subcategory } from "@/config/api";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const SideNavigation = () => {
    const [subcat, setSubcat] = useState([])

    useEffect(() => {
        NewInstance.get(`${api}${subcategory}`)
            .then((res) => setSubcat(res.data))
    }, [])
    return (
        <div id="shortNavigation" className="shadow-sm w-fit lg:w-[230px] mt-4 sticky left-0 top-0 h-fit p-6 ">
            {subcat?.map((item) => (
                <div className="transition ease-in-out duration-300 hover:text-red-400 ">
                    <a href={`${site}products/${subcategory}/${item.id}`}>{item.name}</a>
                </div>
            ))}

        </div>
    );
}

export default SideNavigation;
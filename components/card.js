import { CgEnter } from "react-icons/cg";
import { useEffect } from "react";
import { api, path, site, subcategory, category } from "config/api";
import { useState } from "react";
import { NewInstance } from "../api/http";
import Image from "next/image";
import Link from "next/link";
import noImage from "../assets/noImage.jpg";

const Card = (props) => {
  const [cat, setCat] = useState([]);
  const [subcat, setSubCat] = useState([]);

  useEffect(() => {
    NewInstance.get(`${api}${category}`).then((res) => setCat(res.data));

    NewInstance.get(`${api}${subcategory}`).then((res) => setSubCat(res.data));
  }, []);
  return (
    <Link
      href={`/products/${props.product.id}`}
      className="w-[250px] md:w-[300px] md:w-[250px] lg:w-[230px] truncate shadow my-4 mx-auto md:mx-2 p-4 text-[#660100] cursor-pointer"
    >
      <div
        href={`products/${props.product.id}`}
        className="h-48 w-48 mb-4  mx-auto"
      >
        {props.product.image[0]?.length > 0 ? (
          <img
            src={`${path}${props.product.image[0]}`}
            alt={props.product.name}
            className=" h-48 w-auto object-cover mx-auto transition ease-in-out duration-300 hover:filter  hover:grayscale hover:contrast-100"
          />
        ) : (
          <Image
            width={100}
            height={70}
            src={noImage}
            className=" h-48 w-auto object-cover mx-auto transition ease-in-out duration-300 hover:filter  hover:grayscale hover:contrast-100"
          />
        )}
      </div>

      <div id="nameAndIcon " className="flex justify-between">
        <p className="text-[18-px] text-ellipsis overflow-hidden ">
          {props.product.name}
        </p>
        <button>
          <CgEnter />
        </button>
      </div>
      <p className="text-xs underline mb-2">
        {cat?.map((c, i = 0) =>
          c.id === Number(props.product.category) ? (
            <span key={i++}>{c.name}</span>
          ) : null
        )}
        {"/ "}
        {subcat?.map((sc, i = 300) =>
          sc.id === Number(props.product.subcategory) ? (
            <span key={i++}>{sc.name}</span>
          ) : null
        )}
      </p>
      <p className="text-sm text-ellipsis overflow-hidden ">
        {props.product.description}
      </p>
    </Link>
  );
};

export default Card;

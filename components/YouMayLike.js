import { NewInstance } from "api/http";
import { api, site } from "config/api";
import { useEffect, useState } from "react";
import Card from "components/card";

const YouMayLike = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    NewInstance.get(`${api}products?category=3&type=retail&_limit=6`).then(
      (res) => setProducts(res.data)
    );
  }, []);
  return (
    //   <div id="popularWrapper" className="w-full md:p-8 ">

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {products?.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
    // </div>
  );
};

export default YouMayLike;

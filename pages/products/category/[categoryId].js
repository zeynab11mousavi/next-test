import { NewInstance } from "@/api/http";
import Card from "@/components/card";
import SideNavigation from "@/components/SideNavigation";
import { api, category, products } from "@/config/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Category = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [cat, setCat] = useState([]);
  useEffect(() => {
    NewInstance.get(`${api}${products}?${category}=${categoryId}`).then((res) =>
      setCat(res.data)
    );
  }, [categoryId]);

  return (
    <div className="flex w-full justify-evenly items-start p-8 md:mt-36">
      <SideNavigation />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {console.log(cat)}
        {cat.length > 0 ? (
          cat?.map((product) => <Card product={product} key={product.id} />)
        ) : (
          <div className="bg-red-30 w-full h-screen">
            No Product is available under this category
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Category;

import Card from "@/components/card";
import SideNavigation from "@/components/SideNavigation";
import { NewInstance } from "api/http";
import { products, api } from "config/api";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SearchResult = () => {
  const router = useRouter();
  const { result } = router.query;
  const [searchProducts, setProducts] = useState([]);

  useEffect(() => {
    NewInstance.get(`${api}${products}?name=${result}`).then((res) =>
      setProducts(res.data)
    );
  }, [result, searchProducts]);

  return (
    <div className="w-full min-h-screen flex justify-center mt-8 text-gray-700 md:mt-48 ">
      {searchProducts?.length > 0 ? (
        <div className="w-11/12 flex ">
          <div>
            <SideNavigation />
          </div>
          <div className="w-8/12">
            <p className="text-center text-xl md:text-2xl text-[#8A0019]">
              Your search result:
            </p>
            <div className="md:flex h-fit justify-center items-center">
              {searchProducts?.map((product) => (
                <Card product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      ) : (
          <div className="w-11/12 flex ">
            <div>
              <SideNavigation />
            </div>
            <div className="md:text-2xl text-center w-full p-4 text-[#8A0019]">
              <p>
                {" "}
                Sorry we didn&apos;t found any product with this name
                <br />
                please make sure all letters are capital or the name is complete
              </p>
            </div>
          </div>
      )}
    </div>
  );
};

export default SearchResult;

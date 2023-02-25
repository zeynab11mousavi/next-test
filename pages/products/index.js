import Card from "@/components/card";
import SideNavigation from "@/components/SideNavigation";
import { api, products } from "@/config/api";

export const getStaticProps = async () => {
  // FETCH PRODUCTS
  const res = await fetch(`${api}${products}`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

const Products = ({ products }) => {
  return (
    <div className="flex md:mt-36" >
      <SideNavigation />
      <div className="w-full lg:p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

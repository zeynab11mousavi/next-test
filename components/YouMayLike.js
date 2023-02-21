import { NewInstance } from "api/http";
import { api, site } from "config/api";
import { useEffect, useState } from "react";
import Card from "components/card";

// export const getStaticProps = async () => {
//     const res = await fetch('https://ahtback-u095.onrender.com/products');
//     // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
//     const data = await res.json();
  
//     return {
//       props: { ninjas: data }
//     }
//   }


export const getStaticProps = async () => {
    const res = await fetch(`${api}products?category=3&type=retail&_limit=6`)
    const data = await res.json()

    return {
        props: {popular: data}
    }
}  

const YouMayLike = ({popular}) => {
    // const [products, setProducts] = useState([])


    // useEffect(() => {
    //     NewInstance.get(`${api}products?category=3&type=retail&_limit=6`)
    //     .then((res) => setProducts(res.data))
    // }, [])
    return (             
      <div id="popularWrapper" className="w-full md:p-8 ">

                <div className="md:flex justify-center items-center">


                    {popular?.map((product) => (
                        <Card product={product} key={product.id}/>
                    ))}


                </div>
            </div>
            );
}
 
export default YouMayLike;
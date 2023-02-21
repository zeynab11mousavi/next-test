import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import { api, category } from "@/server/api";

// // SSR

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//   return {
//     props: { fetchedCategory: data },
//   };
// };

// const Test = ({fetchedCategory}) => {
//   return (
//     <>
//       <Head>
//         <title>AHT | test</title>
//       </Head>

//       <div>
//         <h3 className="text-red-300">Test</h3>
        
//         <div>
//           {fetchedCategory?.map((i) => (
//             <p>{i.name}</p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test;




export const getStaticProps = async () => {
  const res = await fetch('https://ahtback-u095.onrender.com/products');
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Test = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Test</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Test;
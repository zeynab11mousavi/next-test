import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div
      className="flex-block  h-screen justify-center items-center text-[#7D2F2F]
        bg-gradient-to-b from-red-100 to-red-300 py-48
        "
    >
      <div className="border-t border-r border-l border-red-500 rounded-[100%] w-[250px] h-[250px] mx-auto flex-block text-center justify-center items-center">
        <p className="text-5xl my-2 p-4">404</p>
        <p className="text-xl">PAGE NOT FOUND</p>
        <p className="text-xl my-4">O_o</p>

        <Link href={"/"}>GO HOME</Link>
      </div>

      <p className="text-center">You will be redirected to home page in a few seconds</p>
    </div>
  );
};

export default NotFound;

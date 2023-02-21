import Image from "next/image";
import Link from "next/link";

// SSR
const Header = () => {
  return (
    <nav>
        {/* {console.log(fetchedCategory)} */}
      <Image src="/Logo.jpg" width={110} height={110} alt="AHT" />
      HEADER
      <Link href={"/ninja/test"}>test is link</Link>
      <div>
        IT IS KILLING ME
      </div>
    </nav>
  );
};

export default Header;

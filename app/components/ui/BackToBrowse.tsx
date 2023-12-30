import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "@/public/arrow-left.svg";

const BackToBrowse = () => {
  return (
    <Link href={"/blog"} className="flex items-center mb-4 mt-6 cursor-pointer">
      <Image src={ArrowLeft} alt="Back" width={24} height={24} />
      <h1 className="ml-2 text-lg text-[#0076AD] md:ml-4 md:block">
        Back to Browse
      </h1>
    </Link>
  );
};

export default BackToBrowse;

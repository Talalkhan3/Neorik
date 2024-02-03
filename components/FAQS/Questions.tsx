
import { Button } from "../ui/button";
import Link from "next/link";
const Questions = () => {
  return (
    <div className="bg-[#394BE9] py-16 max-md:mt-20 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <h1 className="text-white text-4xl text-center font-light max-sm:text-2xl">
        Do you have project in mind ?
      </h1>
      <p className="text-center text-white text-5xl max-sm:text-4xl">
        We can help you turn it into Reality
      </p>
      <div className=" flex items-center justify-center pt-12 ">
        <Link href={"/Contact"}>
          <Button className=" rounded-3xl hover:bg-[#2338F2]" size={"lg"}>
            Let&lsquo;s get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Questions;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Dummy from "../../public/imagedummy.png";

const Expertise = () => {
  return (
    <div className="rounded-[12px] mx-[36px] my-[55px] bg-[#C9C9C9]/15 px-[15px] py-[27px] md:px-[25px] lg:px-[40px] xl:px-[120px] xl:mx-[100px]">
      <div>
        <h1 className="text-[32px] font-neue font-bold">Our Expertise</h1>
        <p className="text-[#343434] font-robo text-[15px]">
          Schedule a live free consultation and get your questions answered.
        </p>
      </div>

      <Tabs defaultValue="web-development" className="mt-[30px]">
        <TabsList className="grid w-full grid-cols-2 font-neue text-[20px] md:grid-cols-4 lg:text-[24px]">
          <TabsTrigger value="web-development">Web Development</TabsTrigger>
          <TabsTrigger value="web-design">Web Design</TabsTrigger>
          <TabsTrigger value="brand-recognition">Brand Recognition</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>
        <TabsContent
          value="web-development"
          className="mt-[50px] md:mt-[20px] 2xl:px-[100px]"
        >
          <div className="flex flex-col md:flex-row-reverse  md:items-center md:justify-between gap-x-[30px]">
            <div className="md:max-w-[500px]">
              <h1 className="text-[20px] md:font-bold xl:text-[32px] font-neue">
                Web Development
              </h1>
              <p className="xl:max-w-[605px] text-[#343434] mt-[12px]  font-robo text-[14px] xl:text-[16px]">
                As a web design firm, we are the home to the best web designers,
                skilled in creating beautiful, responsive websites. We wield a
                deep understanding of graphic design, logo design, and coding
                languages like HTML, to craft unique websites that mirror our
                clients’ brand ethos.
                <br />
                <br />
                A meticulously created website design can help a business
                project a compelling digital persona.
                <br />
                <br />
                The impact of a well-designed website extends beyond aesthetics;
                it can be a powerful tool in driving business development,
                attracting more traffic, and meeting business goals.
              </p>
              <button className="bg-[#394BE9]/25 text-[#394BE9] font-neue rounded-[7px] mt-[15px] xl:mt-[32px] text-[16px] py-[12px] px-[27px]">
                Learn More
              </button>
            </div>

            <Image
              src={Dummy}
              alt="dummmy"
              className="mt-[20px] md:w-[350px] md:h-[429px] lg:w-[550px]"
            />
          </div>
        </TabsContent>
        <TabsContent
          value="web-design"
          className="mt-[50px] md:mt-[20px] 2xl:px-[100px]"
        >
          <div className="flex flex-col md:flex-row-reverse  md:items-center md:justify-between gap-x-[30px]">
            <div className="md:max-w-[500px]">
              <h1 className="text-[20px] md:font-bold xl:text-[32px] font-neue">
                Web Design
              </h1>
              <p className="xl:max-w-[605px] text-[#343434] mt-[12px]  font-robo text-[14px] xl:text-[16px]">
                As a web design firm, we are the home to the best web designers,
                skilled in creating beautiful, responsive websites. We wield a
                deep understanding of graphic design, logo design, and coding
                languages like HTML, to craft unique websites that mirror our
                clients’ brand ethos.
                <br />
                <br />
                A meticulously created website design can help a business
                project a compelling digital persona.
                <br />
                <br />
                The impact of a well-designed website extends beyond aesthetics;
                it can be a powerful tool in driving business development,
                attracting more traffic, and meeting business goals.
              </p>
              <button className="bg-[#394BE9]/25 text-[#394BE9] font-neue rounded-[7px] mt-[15px] xl:mt-[32px] text-[16px] py-[12px] px-[27px]">
                Learn More
              </button>
            </div>

            <Image
              src={Dummy}
              alt="dummmy"
              className="mt-[20px] md:w-[350px] md:h-[429px] lg:w-[550px]"
            />
          </div>
        </TabsContent>
        <TabsContent
          value="brand-recognition"
          className="mt-[50px] md:mt-[20px] 2xl:px-[100px]"
        >
          <div className="flex flex-col md:flex-row-reverse  md:items-center md:justify-between gap-x-[30px]">
            <div className="md:max-w-[500px]">
              <h1 className="text-[20px] md:font-bold xl:text-[32px] font-neue">
                Brand Recognition
              </h1>
              <p className="xl:max-w-[605px] text-[#343434] mt-[12px]  font-robo text-[14px] xl:text-[16px]">
                As a web design firm, we are the home to the best web designers,
                skilled in creating beautiful, responsive websites. We wield a
                deep understanding of graphic design, logo design, and coding
                languages like HTML, to craft unique websites that mirror our
                clients’ brand ethos.
                <br />
                <br />
                A meticulously created website design can help a business
                project a compelling digital persona.
                <br />
                <br />
                The impact of a well-designed website extends beyond aesthetics;
                it can be a powerful tool in driving business development,
                attracting more traffic, and meeting business goals.
              </p>
              <button className="bg-[#394BE9]/25 text-[#394BE9] font-neue rounded-[7px] mt-[15px] xl:mt-[32px] text-[16px] py-[12px] px-[27px]">
                Learn More
              </button>
            </div>

            <Image
              src={Dummy}
              alt="dummmy"
              className="mt-[20px] md:w-[350px] md:h-[429px] lg:w-[550px]"
            />
          </div>
        </TabsContent>
        <TabsContent
          value="marketing"
          className="mt-[50px] md:mt-[20px] 2xl:px-[100px]"
        >
          <div className="flex flex-col md:flex-row-reverse  md:items-center md:justify-between gap-x-[30px]">
            <div className="md:max-w-[500px]">
              <h1 className="text-[20px] md:font-bold xl:text-[32px] font-neue">
                Marketing
              </h1>
              <p className="xl:max-w-[605px] text-[#343434] mt-[12px]  font-robo text-[14px] xl:text-[16px]">
                As a web design firm, we are the home to the best web designers,
                skilled in creating beautiful, responsive websites. We wield a
                deep understanding of graphic design, logo design, and coding
                languages like HTML, to craft unique websites that mirror our
                clients’ brand ethos.
                <br />
                <br />
                A meticulously created website design can help a business
                project a compelling digital persona.
                <br />
                <br />
                The impact of a well-designed website extends beyond aesthetics;
                it can be a powerful tool in driving business development,
                attracting more traffic, and meeting business goals.
              </p>
              <button className="bg-[#394BE9]/25 text-[#394BE9] font-neue rounded-[7px] mt-[15px] xl:mt-[32px] text-[16px] py-[12px] px-[27px]">
                Learn More
              </button>
            </div>

            <Image
              src={Dummy}
              alt="dummmy"
              className="mt-[20px] md:w-[350px] md:h-[429px] lg:w-[550px]"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Expertise;

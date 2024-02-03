import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className="px-80 my-32 flex flex-col gap-40 max-lg:my-20 max-[1710px]:px-16 max-lg:py-12 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5 max-2xl:px-12 ">
      <div className="flex items-center gap-20 max-md:flex-col ">
        <div className="flex flex-col">
          <div>
            <h1 className="font-bold text-7xl max-lg:text-5xl text-[#1E1E1E] py-10">
              Why <span className="text-[#394BE9]">Neorik</span>
            </h1>
            <p className="text-[#434343] ">
              As a web design firm, we are the home to the best web designers,
              skilled in creating beautiful, responsive websites. We wield a
              deep understanding of graphic design, logo design, and coding
              languages like HTML, to craft unique websites that mirror our
              clients’ brand ethos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-[#1E1E1E] pt-7 pb-3">
              Detail-Driven
              <span className="text-[#394BE9]">Website Development</span>
            </h3>
            <p className="text-[#434343] ">
              A meticulously created website design can help a business project
              a compelling digital persona.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-[#1E1E1E] pt-7 pb-3">
              Beyond <span className="text-[#394BE9]"> Aesthetics</span>
            </h3>
            <p className="text-[#434343]">
              The impact of a well-designed website extends beyond aesthetics;
              it can be a powerful tool in driving business development,
              attracting more traffic, and meeting business goals.
            </p>
          </div>
        </div>
        <Image
          src={"/vector1.png"}
          alt="backgrouund"
          width={440}
          height={100}
          className="max-lg:w-[340px]"
        />
      </div>
      <div className="flex items-center gap-20 max-md:flex-col ">
        <div className="flex flex-col">
          <h1 className="font-bold text-7xl text-[#1E1E1E] py-10 max-lg:text-5xl">
            <span className="text-[#394BE9]">Unique</span> Marketing Strategy
          </h1>
          <p className="text-[#434343]">
            Having a well-rounded online marketing strategy, spearheaded by a
            solid web design, can significantly boost a company’s marketing
            efforts. Firms like ours in the Seattle area, with over a decade of
            experience in digital marketing, have seen first-hand how a new
            website can transform a business’s trajectory. Our previous projects
            and helpful feedback from past clients taught us that personalized,
            creative solutions are the key to successful online marketing.
          </p>
          <div>
            <h1 className="font-semibold text-2xl text-[#1E1E1E] py-10">
              It’s All About <span className="text-[#394BE9]"> Trust </span>
            </h1>
            <p className="text-[#434343]">
              Consider partnering with a trusted web design company in Seattle
              WA, for your marketing needs.
            </p>
            <p className="text-[#434343]">
              With professional services from high-end UX to mobile display
              optimization and support services to help your business respond
              quickly to changes, you can be assured that your online presence
              is in capable hands. You’ll benefit from a world-class marketing
              team that understands your brand identity and knows how to
              establish a strong digital presence.
            </p>
          </div>
        </div>
        <Image src={"/vector2.png"} alt="Marketing Picture" width={440} height={100} className="max-lg:w-[340px]" />
      </div>
    </div>
  );
};

export default Description;

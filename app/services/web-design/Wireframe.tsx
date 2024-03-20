import React from "react";

const Wireframe = () => {
  return (
    <div className="bg-[#394BE9] px-[30px] py-[50px] xl:px-[100px] ">
      <h1 className="text-[40px] font-neue text-white">Creating Wireframe</h1>
      <div className="flex justify-between items-center gap-40 mt-16 max-md:flex-col max-md:gap-20">
        <div className="text-white">
          <h1 className="font-neue text-[32px]">Sitemap</h1>
          <p className="font-robo text-[20px]">
            A sitemap is a blueprint of your website that help search engines
            find, crawl and index all of your website&lsquo;s content. Sitemaps also
            tell search engines which pages on your site are most important.
          </p>
        </div>
        <div className="text-white">
          <h1 className="font-neue text-[32px]">Design</h1>
          <p className="font-robo text-[20px]">
            designing is the process of planning, conceptualizing, and
            implementing the plan for designing a website in a way that is
            functional and offers a good user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wireframe;

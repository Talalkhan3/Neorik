import React from "react";

const Wireframe = () => {
  return (
    <div className="bg-slate-300 max-[1710px]:px-16 px-80 py-32 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5">
      <h1 className="text-5xl font-light max-md:text-4xl">Creating Wireframe</h1>
      <div className="flex justify-between items-center gap-40 mt-16 max-md:flex-col max-md:gap-20">
        <div>
          <h1 className="text-4xl font-light max-md:text-4xl">Sitemap</h1>
          <p className="text-lg mt-4 max-md:text-sm">
            A sitemap is a blueprint of your website that help search engines
            find, crawl and index all of your website&lsquo;s content. Sitemaps also
            tell search engines which pages on your site are most important.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-light max-md:text-4xl ">Design</h1>
          <p className="text-lg mt-4 max-md:text-sm">
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

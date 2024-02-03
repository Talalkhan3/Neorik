import React from "react";

const Newprojects = () => {
  return (
    <div className="bg-slate-200 px-72 py-12 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <h1 className="font-light">New Projects</h1>
      <div className="flex justify-center items-center gap-4 pt-10 text-2xl max-sm:flex-col max-sm:gap-7 ">
        <div>
          <p className="text-xl">
            Our business development team works closely with clients to pin down
            the problem and shape the right team to create a solution.
          </p>
        </div>
        <div>
          <p className="text-xl">
            Those fully integrated teams have the talents, skills, tools and
            imagination to answer complex business challenges with products and
            services people love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newprojects;

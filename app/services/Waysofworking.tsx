import React from "react";

const Waysofworking = () => {
  return (
    <div className="bg-[#394BE9] px-52 py-24 mt-7 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <p className="text-white font-light">Ways of Working</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3">
        <div>
          <h1 className="text-white text-3xl font-light">We engage users</h1>
          <p className="mt-4 text-white font-light text-md">
            Meeting user needs is not enough. We focus on both the “jobs to be
            done” as well as the &quot;joys to be had&quot;.
          </p>
        </div>
        <div>
          <h1 className="text-white text-3xl font-light ">From idea to launch</h1>
          <p className="mt-4 text-white font-light text-md">
            We partner with clients from discovery through to scale, building
            the right thing and building it right.
          </p>
        </div>
        <div>
          <h1 className="text-white text-3xl font-light">We work as one team</h1>
          <p className="mt-4 text-white font-light text-md">
            The line between “client” and “partner” blurs. We work as one team,
            delivering value transparently.
          </p>
        </div>
        <div>
          <h1 className="text-white text-3xl font-light">We are Agile</h1>
          <p className="mt-4 text-white font-light text-md">
            We&apos;re customer obsessed, outcome focused, and willing and able to
            embrace change along the journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Waysofworking;

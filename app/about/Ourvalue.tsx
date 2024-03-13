const value = [
  {
    head: "Be Human",
    desc: "Be yourself and recognize it in others",
  },
  {
    head: "Learn Together",
    desc: "Rely on each other and get curious.",
  },
  {
    head: "Raise the bar",
    desc: "Good enough doesn&apos;t cut it, always push forward.",
  },
  {
    head: "Use the Freedom",
    desc: "We can control the future and make it what we want.",
  },
  {
    head: "Enjoy the journey",
    desc: "Celebrate, even when we fail.",
  },
];
const Ourvalue = () => {
  return (
    <div className="px-[33px] py-[50px] lg:px-[100px]">
      <p className=" font-neue text-[32px]">Our Value</p>
      <h1 className="font-robo text-[20px] text-[#434343] lg:max-w-[900px] lg:mt-[20px] lg:text-[24px] 2xl:text-[40px]">
        we work alongside clients who share our values, to deliver successful
        products which delight and have a positive impact on the world.
      </h1>

      <div className="mt-[102px]">
        <div className="grid grid-cols-1 gap-y-[34px] lg:grid-cols-2">
          {value.map((values,value) => {
            return (
            <div key={value}>
            <h1 key={values.head} className="font-neue text-[32px]">{values.head}</h1>
            <p key={values.desc} className="font-robo text-[20px]">{values.desc}</p>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourvalue;

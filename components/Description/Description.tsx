import Image from "next/image";
import React from "react";

const step = [
  {
    name: "Be Human",
    desc: "Be yourself and recognise it in others.",
  },
  {
    name: "Learn Together",
    desc: "Rely on each other and get curious.",
  },
  {
    name: "Raise the bar",
    desc: "Good enough doesn't cut it, always push forward.",
  },
  {
    name: "Use the Freedom",
    desc: "We can control the future and it what we want",
  },
  {
    name: "Enjoy the Journey",
    desc: "Celebrate , even when we fail",
  },
];

const Description = () => {
  return (
    <div className="my-[57px] mx-[36px] rounded-[14px] bg-gradient-to-t from-[#394be9] to-[#394be9]/75 p-[30px] xl:mx-[100px] xl:px-[54px] flex flex-col xl:flex-row xl:items-center  xl:justify-between">
      <div className="xl:max-w-[600px]">
        <h1 className="xl:max-w-[250px] text-[32px] font-neue text-white xl:text-[40px]">
          Our Five key principles
        </h1>
        <p className="text-white mt-[25px] font-robo text-[15px] xl:text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Facilisis lacinia hendrerit
          sit arcu convallis porttitor viverra iaculis dictum. Senectus risus
          nec mi amet et risus commodo habitant suspendisse. Risus amet in donec
          vel ridiculus arcu orci nullam. Sed sed diam tellus sed vulputate
          velit. Posuere posuere aenean vitae condimentum id.
          <br />
          <br />
          Nulla tortor tincidunt sit pharetra. Pulvinar cursus dignissim
          adipiscing non nunc hendrerit. Semper diam donec at gravida. Sit nunc
          morbi nec accumsan sit dignissim. Fermentum euismod in elit non etiam
          in.
          <br />
          <br />
          Ipsum magna sed orci tellus a. Euismod pretium in cursus ullamcorper
          et sodales. In quis laoreet sagittis ac elementum consequat at
          pellentesque dictumst.
        </p>
      </div>
      <div className="mt-[58px] flex flex-col  gap-y-[30px]">
        {step.map((steps) => {
          return (
            <div key={steps.desc}>
              <h1 key={steps.name} className="text-white text-[24px] xl:text-[30px] font-neue font-bold">{steps.name}</h1>
              <p key={steps.desc} className="text-[16px] text-[#f9ebff] font-robo font-normal">{steps.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;

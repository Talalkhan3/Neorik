import Figma from "../../public/figma.svg";
import Trello from "../../public/trello.svg";
import Nextjs from "../../public/Nextjs.svg";
import Javascript from "../../public/Javascript.svg";
import Html from "../../public/htlm.svg";
import Css from "../../public/css.svg";
import Clerk from "../../public/clerk.svg";
import Illustrator from "../../public/illustrator.svg";
import Photoshop from "../../public/photoshop.svg";
import Shadcnui from "../../public/shadcnui.svg";
import React from "../../public/react.svg";
import Notion from "../../public/Notion.svg";
import Image from "next/image";

const item = [
  {
    icon: Clerk,
    name: "Clerk",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Javascript,
    name: "Javascript",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Notion,
    name: "Notion",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Nextjs,
    name: "Next Js",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Illustrator,
    name: "Adobe Illustrator ",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Photoshop,
    name: "Adobe Photoshop ",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Shadcnui,
    name: "Shadcn UI",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Figma,
    name: "Figma",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Css,
    name: "CSS",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Html,
    name: "HTML",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: Trello,
    name: "Trello",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
  {
    icon: React,
    name: "React Js",
    css: "bg-white flex items-center gap-x-[30px] border-[#000000]/30 border rounded-[9px] px-[25px] py-[13px]",
  },
];
const Questions = () => {
  return (
    <div className="bg-[#c9c9c9]/15 mx-[36px] my-[46px] px-[16px] py-[32px] rounded-[14px]">
      <h1 className="font-neue text-[32px] font-bold text-center">
        Base of Tools & Technologies
      </h1>
      <p className="text-[13px] text-center font-robo font-normal text-[#343434]">
        Explore the tools and technologies that power our IT services. We
        leverage the latest advancements to deliver efficient and reliable
        solutions tailored to your needs.
      </p>
      <div className="flex flex-wrap gap-x-[20px] gap-y-[25px] items-center justify-center mt-[57px] ">
        {item.map((items) => (
          <div className={items.css} key={items.css}>
            <Image src={items.icon} key={items.icon} alt={items.name} />
            <h1
              key={items.name}
              className="font-robo text-[18px] font-medium text-[#858585]"
            >
              {items.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

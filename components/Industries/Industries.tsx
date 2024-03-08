import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Laptop, PenTool, Percent, Ribbon } from "lucide-react";
const service = [
  {
    name: "Web Development Team",
    desc: "Having a well-rounded online marketing strategy, spearheaded by a solid web design, can significantly boost a company’s marketing efforts. Firms like ours in the Seattle area, with over a decade of experience in digital Marketing",
    icon: Laptop,
    butt: "Hire Team",
    link: "/web-development",
  },
  {
    name: "Marketing Team",
    desc: "Having a well-rounded online marketing strategy, spearheaded by a solid web design, can significantly boost a company’s marketing efforts. Firms like ours in the Seattle area, with over a decade of experience in digital Marketing",
    icon: Percent,
    butt: "Hire Team",
    link: "/email-marketing",
  },
  {
    name: "Branding Team",
    desc: "Having a well-rounded online marketing strategy, spearheaded by a solid web design, can significantly boost a company’s marketing efforts. Firms like ours in the Seattle area, with over a decade of experience in digital Marketing",
    icon: Ribbon,
    butt: "Hire Team",
    link: "/brochures",
  },
  {
    name: "Web Design Team",
    desc: "Having a well-rounded online marketing strategy, spearheaded by a solid web design, can significantly boost a company’s marketing efforts. Firms like ours in the Seattle area, with over a decade of experience in digital Marketing",
    icon: PenTool,
    butt: "Hire Team",
    link: "/web-design",
  },
];
const Industries = () => {
  return (
    <div className="px-[36px] py-[50px] flex flex-col w-full xl:px-[100px]">
      <div className="bg-[#C9C9C9]/15 px-[20px] py-[20px] rounded-[14px] ">
        <h1 className="text-[20px] font-neue text-center mb-12 lg:text-[28px]">
          Access diverse and specialized teams to build your business.
        </h1>
        <div className="flex flex-col gap-y-[25px] xl:flex-row gap-x-[13px]">
          {service.map((services) => {
            const LinkIcon = services.icon;
            return (
              <div className="bg-white px-[23px] py-[25px] rounded-[5px]" key={services.butt}>
                <LinkIcon className="h-6 text-[#394BE9]" />
                <h1
                  className="text-[16px] font-neue mt-[17px]"
                  key={services.name}
                >
                  {services.name}
                </h1>
                <p
                  className="font-robo text-[13px] text-[#343434] mt-[9px] lg:text-[14px]"
                  key={services.desc}
                >
                  {services.desc}
                </p>
                <Link href={services.link} key={services.link}>
                  <button
                    className="text-[13px] font-robo font-semibold text-[#394be9] mt-[24px]"
                    key={services.butt}
                  >
                    {services.butt}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;

import Link from "next/link";

const service = [
  {
    head: "Discover",
    desc: "New value. A galvanizing vision. Design-led research and a distinct market perspective. The direction and momentum you need to make it real.",
    link: "Learn More",
    top: "Discover",
    href: "/discover",
  },
  {
    head: "Pilot",
    desc: "Your idea made real and tested with users. Building value where it counts.",
    link: "Learn More",
    top: "Pilot",
    href: "/pilot",
  },
  {
    head: "Launch",
    desc: "From concept to launch or something reinvented. Test and learn towards a service people love.",
    link: "Learn More",
    top: "Launch",
    href: "/launch",
  },
  {
    head: "Boost",
    desc: "Deep expertise and capabilities integrated into your own projects. Better outcomes, new ways of working.",
    link: "Learn More",
    top: "Boost",
    href: "/boost",
  },
];
const Discover = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-xl:flex-col gap-x-10 gap-y-7 px-72 mt-32 mb-32  max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
    
        {service.map((services, service) => {
          return (
            <div key={service} className="relative bg-gradient-to-t from-[#394be9] to-[#394be9]/75 overflow-hidden rounded-lg  ">
              <div
                className="absolute flex items-center justify-center p-0 m-0 left-[30%] z-[1]"
                key={service}
              >
                <h1
                  className=" text-[200px] m-0 p-0 text-white/30 font-bold"
                  key={services.top}
                >
                  {services.top}
                </h1>
              </div>
              <div key={service} className="px-7 py-16 relative z-[2]">
                <h1 className="font-light text-4xl font-neue text-white" key={services.head}>
                  {services.head}
                </h1>
                <p className="text-lg mt-12 font-robo text-white" key={services.desc}>
                  {services.desc}
                </p>
                <Link href={services.href}>
                  <div className="flex  gap-x-1 hover:gap-x-3 duration-100" key={service}>
                    <h1 className="text-white text-lg font-light mt-5" key={services.link}>{services.link}</h1>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

  );
};

export default Discover;

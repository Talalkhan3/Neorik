const item = [
  {
    head: "We engage users",
    desc: "Meeting user needs is not enough. We focus on both the “jobs to be done” as well as the “joys to be had”.",
  },
  {
    head: "From idea to launch",
    desc: "We partner with clients from discovery through to scale, building the right thing and building it right.",
  },
  {
    head: "We work as one team",
    desc: " The line between “client” and “partner” blurs. We work as one team, delivering value transparently.",
  },
  {
    head: "We are Agile",
    desc: "We're customer obsessed, outcome focused, and willing and able to embrace change along the journey.",
  },
];

const Waysofworking = () => {
  return (
    <div className="bg-[#394BE9] px-[33px] py-[50px]">
      <p className="text-white font-neue text-[32px]">Ways of Working</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:gap-x-[30px] gap-y-[30px]">
        
          {item.map((items, item) => (
            <div key={item}>
              <h1 key={items.head} className="font-neue text-white text-[27px] font-light ">
                {items.head}
              </h1>
              <p
                key={items.desc}
                className="mt-4 text-white font-robo text-md"
              >
                {items.desc}
              </p>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Waysofworking;

const Whyus = () => {
  return (
    <div className="rounded-[14px] bg-gradient-to-t from-[#394be9] to-[#394be9]/75 mx-[36px] my-[58px] px-[17px] py-[38px] lg:px-[36px] xl:mx-[100px] xl:px-[84px] xl:py-[130px]">
      <h1 className="font-neue text-[48px] text-white xl:max-w-[220px]">
        Why Neorik ?
      </h1>
      <p className="xl:max-w-[605px] text-white mt-[25px] xl:mt-[20px] font-robo text-[14px] xl:text-[16px]">
          As a web design firm, we are the home to the best web designers,
          skilled in creating beautiful, responsive websites. We wield a deep
          understanding of graphic design, logo design, and coding languages
          like HTML, to craft unique websites that mirror our clients’ brand
          ethos.
          <br />
          <br />
          A meticulously created website design can help a business project a
          compelling digital persona.
          <br />
          <br />
          The impact of a well-designed website extends beyond aesthetics; it
          can be a powerful tool in driving business development, attracting
          more traffic, and meeting business goals.
        </p>
      <button className="bg-white text-[#d061ff] font-neue rounded-[7px] mt-[15px] xl:mt-[32px] text-[16px] py-[12px] px-[27px]">
        Learn More
      </button>
      <div className="flex flex-col w-full mt-[55px] xl:mt-[90px] text-white lg:flex-row lg:gap-x-[30px] xl:gap-x-[130px] ">
        <div>
          <h1 className=" font-neue text-[20px] pl-[17px] border-l border-[#61dafb]">
            Empowered Excellence
          </h1>
          <p className=" font-robo text-[14px] mt-[18px] pl-[17px] font-normal">
            We think out of the box and are committed to delivering the highest
            quality software and services tailored to your business needs.
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#F7DF1E] my-[30px] lg:hidden"></div>
        <div>
          <h1 className=" font-neue text-[20px] pl-[17px] border-l border-[#61dafb]">
            Innovative Transformation
          </h1>
          <p className=" font-robo text-[14px] mt-[18px] pl-[17px] font-normal">
            Innovation is at our core, we pioneer transformative solutions,
            drive progress, and want to help you shape the future.
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#F7DF1E] my-[30px] lg:hidden"></div>
        <div>
          <h1 className=" font-neue text-[20px] pl-[17px] border-l border-[#61dafb]">
            Impeccable Word
          </h1>
          <p className=" font-robo text-[14px] mt-[18px] pl-[17px] font-normal">
            We deliver on our timelines and will help you work through any
            tricky or challenging requirements for your business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;

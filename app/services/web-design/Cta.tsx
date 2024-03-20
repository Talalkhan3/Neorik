const Cta = () => {
  return (
    <div className=" flex flex-col md:justify-center md:items-center rounded-[14px] bg-gradient-to-t from-[#394be9] to-[#394be9]/75 mx-[36px] my-[58px] px-[17px] py-[27px] lg:mx-[100px]">
      <h1 className="text-[36px] font-semibold font-robo text-white">
        Confused choosing a plan ?
      </h1>
      <p className="text-white font-robo text-[15px] mt-[16px]">
        Schedule a live free consultation and get your questions answered.
      </p>
      <button className="bg-white text-[#d061ff] font-neue rounded-[7px] mt-[30px] xl:mt-[32px] text-[16px] py-[12px] px-[27px]">
        Schedule a Call
      </button>
    </div>
  );
};

export default Cta;

const item = [
  {
    head: "E-mail Marketing",
    desc: "At Neorik, we understand the importance of effective email marketing in nurturing customer relationships and driving conversions. Our personalized email campaigns are designed to captivate your audience, deliver valuable content, and ultimately, drive engagement and sales. With Neorik by your side, you can unlock the full potential of email marketing for your business.",
  },
  {
    head: "Search Engine Optimization",
    desc: "With our expertly crafted search engine optimization (SEO) strategies, we excel at boosting your online visibility and driving organic traffic to your website. By leveraging the latest SEO techniques and algorithms, we ensure that your brand stands out amidst the digital noise.",
  },
  {
    head: "Social Media Marketing",
    desc: "In the realm of social media marketing, Neorik takes your online presence to new heights. Our tailored campaigns are designed to engage your audience, foster meaningful interactions, and expand your brand's reach across various social platforms. From content creation to community management, we've got you covered.",
  },
  {
    head: "Pay Per Click ads",
    desc: "Harness the power of pay-per-click (PPC) advertising with Neorik. Our targeted PPC campaigns are engineered to deliver measurable results and maximize your return on investment. Whether it's Google Ads, Bing Ads, or social media advertising, we tailor our strategies to meet your specific goals and objectives.",
  },
];

const bundle = () => {
  return (
    <div className="bg-[#C9C9C9]/15 mx-[36px] my-[46px] px-[17px] py-[30px] rounded-[14px] md:px-[20px] xl:mx-[100px] ">
      <h1 className="text-[32px] font-neue font-bold">Marketing Bundle</h1>
      <p className="text-[16px] font-robo lg:text-[20px] text-[#565656]">
        This digital marketing pack includes the following which are essential
        for scaling your business
      </p>
      <div className="mt-[50px]">
        <div className="grid grid-cols-1 gap-y-[30px] md:grid-cols-2 md:gap-x-[30px] xl:grid-cols-4 xl:gap-x-[17px]">
          {item.map((item, items) => {
            return (
              <div
                key={items}
                className="bg-[#CFCFCF]/25 px-[19px] py-[20px] rounded-[7px]"
              >
                <h1
                  key={item.head}
                  className="text-[27px] font-robo font-bold text-[#394BE9] max-w-[250px] pb-[12px]"
                >
                  {item.head}
                </h1>
                <p key={item.desc}
                className=" border-t py-[12px] font-robo text-[15px] text-[#181818]/90">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default bundle;

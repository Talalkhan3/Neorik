import React from "react";

const Desc1 = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:flex-col justify-between gap-20 px-80 py-32 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5 max-2xl:px-16">
      <div>
        <h1 className="text-5xl font-light max-md:text-4xl">Print design by Neorik</h1>
        <p className="text-lg mt-4 max-md:text-sm">
          We live in a digital world, but sometimes there’s nothing quite as
          powerful as print. <br /><br /> At Neorik, we can help with every aspect of your
          project, from design all the way to liaising with the printers. <br /> <br /> We
          know what works when you’re taking your brand into physical formats,
          and we’re passionate about the craft. <br /> <br /> Whether we’re polishing the
          design, picking the print techniques, or choosing the perfect paper,
          we’re a bit obsessive about the details that make the difference. <br /> <br /> When
          you’re putting your brand and your message in people’s hands, on their
          walls, or through their letterbox, the quality needs to be right –
          we’ll make sure there’s no compromise.
        </p>
      </div>
      <div>
        <h1 className="text-5xl font-light max-md:text-4xl">
          Brochures, stationery, business cards & more
        </h1>
        <p className="text-lg mt-4 max-md:text-sm">
          Our specialisms include business cards, brochures and full branded
          stationery for your business. <br /> <br /> Whether you’re holding an event,
          launching something new, or just looking for that tactile connection
          with your clients and customers, some things are just better in print.
        </p>
      </div>
    </div>
  );
};

export default Desc1;

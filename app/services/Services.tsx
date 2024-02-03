import React from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  return (
    <div className="mt-12 mb-12 px-80 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <h1 className="text-center">Our Sevices</h1>
      <div className="flex justify-center items-center mt-16">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-24 ">
          <div>
            <h1 className="text-5xl text-[#394BE9]">Design</h1>
            <p className="text-[#434343] font-light mt-12">
              Design is quite simply our passion. From branding and print to
              making things look beautiful on screen, this is what we live and
              breathe. Whether you’re starting out or in need of a rebrand, we
              can help you really stand out.
            </p>
            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="item-1" className="rounded-md">
                <AccordionTrigger>
                  <h1>Digital design</h1>
                </AccordionTrigger>
                <AccordionContent>
                  We design great-looking websites and mobile apps from the
                  ground up.
                  <Link href={"/services/web-design"}>
                    <h1 className="text-[#394be9] text-lg mt-3">Read more ...</h1>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="rounded-md">
                <AccordionTrigger>
                  <h1>Branding & logo design</h1>
                </AccordionTrigger>
                <AccordionContent>
                  From logos with impact to shaping your full visual identity,
                  we can help you show people what you’re all about.
                  <Link href={"/services/logo-design"}>
                    <h1 className="text-[#394be9] text-lg mt-3">Read more ...</h1>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="rounded-md">
                <AccordionTrigger>
                  <h1>Brochures, stationery & business cards</h1>
                </AccordionTrigger>
                <AccordionContent>
                  We design beautiful brochures, stationery and business cards.
                  <Link href={"/services/brochures"}>
                    <h1 className="text-[#394be9] text-lg mt-3">Read more ...</h1>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              
            </Accordion>
          </div>
          <div>
            <h1 className="text-5xl text-[#394BE9]">Digital</h1>
            <p className="text-[#434343] font-light mt-12">
              We design and build great-looking websites that work on every
              device - we know that mobile-friendly is a must. Using the latest
              responsive design techniques - fast, functional and eye-catching
              websites is what we do.
            </p>
            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="item-1" className="rounded-md">
                <AccordionTrigger>
                  <h1>Responsive, mobile friendly websites</h1>
                </AccordionTrigger>
                <AccordionContent>
                  We use the latest responsive design techniques to deliver
                  mobile-optimised websites that will work beautifully on any
                  device.
                  <Link href={"/services/web-development"}>
                    <h1 className="text-[#394be9] text-lg mt-3">Read more ...</h1>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="rounded-md">
                <AccordionTrigger>
                  <h1>E-Commerce / M-Commerce websites</h1>
                </AccordionTrigger>
                <AccordionContent>
                  We build simple, reliable e-commerce websites with Shopify. We
                  use a proven platform so we can focus on creating a
                  great-looking site that’s a joy to use.
                  <Link href={"/services/e-commerce"}>
                    <h1 className="text-[#394be9] text-lg mt-3">Read more ...</h1>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="rounded-md">
                <AccordionTrigger>
                  <h1>Email marketing</h1>
                </AccordionTrigger>
                <AccordionContent>
                  We design and build email marketing templates optimised for
                  mobile – perfect for promotional campaigns, newsletters and
                  content amplification
                  <Link href={"/services/email-marketing"}>
                    <h1 className="text-[#394be9] text-lg mt-3">Read more ...</h1>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

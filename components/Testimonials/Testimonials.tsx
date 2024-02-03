import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Testimonials = () => {
  return (
    <div className="flex flex-col items-center mt-32 mb-32 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <h1 className="text-5xl font-black text-[#1e1e1e] text-center">
        What our <span className="text-[#394BE9]"> Clients</span> Say
      </h1>
      <Carousel className="w-[700px] mt-20 flex flex-col justify-center max-md:w-[400px]">
        <CarouselContent>
          <CarouselItem>
            <div className="flex justify-center flex-col px-5 py-10 border rounded-md">
              <img src="" alt="Profilepic" className="text-center" />
              <p className=" mt-10 text-[#717171] max-md:text-sm">
              As a business owner, I was struggling to
                establish a strong online presence and attract new customers.
                That's when I turned to Neorik for help. From the very
                beginning, their team was incredibly professional,
                knowledgeable, and dedicated to helping my business succeed.
                Their web-design services were top-notch, creating a visually
                stunning and user-friendly website that perfectly represented my
                brand. They also provided excellent web-development services,
                ensuring that my website was fully functional and optimized for
                all devices. But what truly impressed me was their expertise in
                SEO and digital marketing. Thanks to their strategies, my
                website's traffic and online visibility have significantly
                increased, resulting in a noticeable growth in my business.
                Neorik's method really works, and I have seen the results
                firsthand. I highly recommend Neorik to anyone in need of
                web-design, web-development, SEO, or digital marketing services.
                They are truly the best in the business!
              </p>
              <div className="flex justify-between mt-14">
                <div className="text-[#394BE9] font-semibold">
                  <h1>Khalid Usman</h1>
                </div>
                <div className="text-[#394BE9] font-bold">
                  <h1>CEO | SHIFA-AFRICA</h1>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-[700px] px-5 py-10 border rounded-md max-md:w-[400px]">
              <img src="" alt="Profilepic" className="text-center" />
              <p className=" mt-10 text-[#717171] max-md:text-sm">
                As a business owner, I was struggling to
                establish a strong online presence and attract new customers.
                That's when I turned to Neorik for help. From the very
                beginning, their team was incredibly professional,
                knowledgeable, and dedicated to helping my business succeed.
                Their web-design services were top-notch, creating a visually
                stunning and user-friendly website that perfectly represented my
                brand. They also provided excellent web-development services,
                ensuring that my website was fully functional and optimized for
                all devices. But what truly impressed me was their expertise in
                SEO and digital marketing. Thanks to their strategies, my
                website's traffic and online visibility have significantly
                increased, resulting in a noticeable growth in my business.
                Neorik's method really works, and I have seen the results
                firsthand. I highly recommend Neorik to anyone in need of
                web-design, web-development, SEO, or digital marketing services.
                They are truly the best in the business!
              </p>
              <div className="flex justify-between mt-14">
                <div className="text-[#394BE9] font-semibold">
                  <h1>Khalid Usman</h1>
                </div>
                <div className="text-[#394BE9] font-bold">
                  <h1>CEO | SHIFA-AFRICA</h1>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;

"use client"
import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useEffect, useState } from "react";
import MobileNav from "../Mobilenav/MobileNav";

const Mobilenavbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"icon"} variant="ghost" className=" p-0 m-0 lg:hidden text-white">
          <Menu size={"lg"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <MobileNav />
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenavbar;

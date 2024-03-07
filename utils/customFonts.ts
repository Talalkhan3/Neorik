import localFont from "next/font/local";

const roobert = localFont({
  src: [
    {
      path: "../assets/fonts/roobert/RoobertLight.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/roobert/RoobertRegular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/roobert/RoobertMedium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/roobert/RoobertSemiBold.ttf",
      weight: "600",
    },
    {
      path: "../assets/fonts/roobert/RoobertBold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/roobert/RoobertHeavy.ttf",
      weight: "800",
    },
  ],
  variable: "--font-roobert",
});

const neue = localFont({
  src: [
    {
      path: "../assets/fonts/neue/PPNeueMachina-InktrapLight.otf",
      weight: "300",
    },
    {
      path: "../assets/fonts/neue/PPNeueMachina-InktrapRegular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/neue/PPNeueMachina-InktrapUltrabold.otf",
      weight: "800",
    },
  ],
  variable: "--font-neue",
});

export { roobert, neue };

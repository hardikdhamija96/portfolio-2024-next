import { Barlow_Condensed, Montserrat } from "next/font/google";
const barlowCondensed = Barlow_Condensed({ weight: "500", subsets: ["latin"] });
const montSerrat = Montserrat({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    
    <div className="bg-darkBg absolute h-full z-[-10] w-full">
      <div className="h-full max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h1
          className={`${barlowCondensed.className} text-textColor text-6xl text-center pb-12 sm:pb-0`}>
          HARDIK DHAMIJA
        </h1>
        <h1
          className={`${montSerrat.className} text-textColor text-[2rem] text-center tracking-widest leading-10`}>
          WEB-DEVELOPER
        </h1>
      </div>
    </div>
  );
}

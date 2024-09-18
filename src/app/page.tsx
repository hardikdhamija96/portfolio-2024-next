import { Barlow_Condensed, Montserrat, Lato } from "next/font/google";
import Link from "next/link";
const barlowCondensed = Barlow_Condensed({ weight: "500", subsets: ["latin"] });
const montSerrat = Montserrat({ weight: ["300","400","500","700"], subsets: ["latin"] });
const lato = Lato({
  weight:["300","400","700","900"],
  subsets:['latin']
});

export default function Home() {
  return (
    
    <div className="bg-darkBg absolute h-full z-[-10] w-full px-2">
      <div className="h-full max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h1
          className={`${barlowCondensed.className} text-textColor text-5xl text-center pb-8 sm:pb-10 sm:text-6xl`}>
          HARDIK DHAMIJA
        </h1>
        <p className={`${montSerrat.className} text-xl text-center text-headingColor pb-4`}>Software Developer Specialized in React</p>
        {/* <h1
          className={`${montSerrat.className} text-textColor text-[2rem] text-center tracking-widest leading-10`}>
          WEB-DEVELOPER
        </h1> */}
        <div className="py-5 w-full flex flex-row justify-center gap-3 items-center">
          <button className={`${lato.className} py-2.5 px-5 me-2 font-medium text-headingColor focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-darkBlue focus:z-10 focus:ring-4 focus:ring-gray-100`}><Link href={"/project"}>View My Work</Link></button>
          <button className={`${lato.className} py-2.5 px-5 me-2 font-medium text-headingColor focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-darkBlue focus:z-10 focus:ring-4 focus:ring-gray-100`}><Link href={"/contact"}>Get in Touch</Link></button>
          
        </div>

        <div className="flex flex-col gap-3 py-4 w-full justify-center items-center text-green-500 text-2xl font-bold"><span className="text-green-500">Available for hiring!</span><span> Can join Immediately</span></div>
        
      </div>
    </div>
  );
}

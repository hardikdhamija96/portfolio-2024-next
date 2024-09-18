import { Barlow_Condensed, Montserrat, Lato } from "next/font/google";
import Link from "next/link";
const barlowCondensed = Barlow_Condensed({ weight: "500", subsets: ["latin"] });
const montSerrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    <div className="bg-darkBg absolute h-full z-[-10] w-full px-2">
      <div className="h-full max-w-7xl mx-auto flex flex-col justify-center items-center px-4">
        <p
          className={`${montSerrat.className} sm:text-xl text-headingColor pb-4 sm:mt-[16vh] mt-[4vh] text-left md:text-2xl`}>
          Hi, I&apos;m Hardik Dhamija, a <span className="font-semibold">Software Developer</span> specializing in <span className="font-semibold">React </span>
          with a growing interest in full-stack development. I create modern,
          responsive web applications using technologies such as React, Next.js,
          and Node.js. I&apos;m currently seeking opportunities to leverage my
          frontend skills and further develop my backend expertise.
        </p>
        <p
          className={`${montSerrat.className} sm:text-xl text-left text-headingColor pb-4 md:text-2xl`}>
          I graduated from the <span className="font-semibold">Thapar Institute of Engineering & Technology</span>, a
          prestigious institution where I built a solid technical foundation.
          Professionally, I&apos;ve worked with <span className="font-semibold">TCS</span>, where I
          focused on frontend development while gaining valuable experience with
          backend technologies. This combination has equipped me with a
          versatile skill set, allowing me to tackle both client and server-side
          challenges effectively.
        </p>
        <div className="py-5 w-full flex flex-row justify-center gap-3 items-center">
          <button
            className={`${lato.className} py-2.5 px-5 me-2 font-medium text-headingColor focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-darkBlue focus:z-10 focus:ring-4 focus:ring-gray-100`}>
            <Link href={"/project"}>View My Work</Link>
          </button>
          <button
            className={`${lato.className} py-2.5 px-5 me-2 font-medium text-headingColor focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-darkBlue focus:z-10 focus:ring-4 focus:ring-gray-100`}>
            <Link href={"/contact"}>Get in Touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

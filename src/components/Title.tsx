import { Gruppo, Orbitron, Gluten,League_Spartan } from "next/font/google";

const lspartan = League_Spartan({ weight: "700", subsets: ["latin"] });


interface TitleProps {
  name: string;
}

function Title(props: TitleProps) {
  return (
    // <div>
      
    //   {/* <div className={`${gruppo.className} text-5xl font-bold text-gray-800`}>
    //     {props.name}
    //   </div>
    //   <div className={`${orbitron.className} text-5xl font-bold text-gray-800`}>
    //     {props.name}
    //   </div>
    //   <div className={`${gluten.className} text-5xl font-bold text-gray-800`}>
    //     {props.name}
    //   </div> */}
      
    // </div>
    <div className={`${lspartan.className} flex items-center justify-center text-[3.6rem]  font-bold text-[#0FA3B1] active:text-[#54d6e2] transition-all delay-[120] ease-in-out`}>
        {props.name}
      </div>
  );
}

export default Title;

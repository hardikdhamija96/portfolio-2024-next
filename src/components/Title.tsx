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
    <div className={`${lspartan.className} text-5xl font-bold text-red-400`}>
        {props.name}
      </div>
  );
}

export default Title;

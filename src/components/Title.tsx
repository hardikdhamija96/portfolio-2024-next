import { Gruppo, Orbitron, Gluten,League_Spartan } from "next/font/google";

const lspartan = League_Spartan({ weight: "700", subsets: ["latin"] });


interface TitleProps {
  name: string;
}

function Title(props: TitleProps) {
  return (
    
    <div className={`${lspartan.className} flex items-center justify-center sm:text-[3.6rem] text-[4.6rem]  font-bold text-headingColor active:text-[3.2rem] transition-all delay-[120] ease-in-out`}>
        {props.name}
      </div>
  );
}

export default Title;

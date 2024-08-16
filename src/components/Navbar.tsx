import Link from "next/link"
import Title from "./Title"



const Navbar = () => {
  return (
    <nav className=" min-h-[10vh] flex justify-between items-center max-w-5xl mx-auto">
        <Link href={"/"}><Title name="Hardik Dhamija"/></Link>
        <ul className="flex gap-6 font-[500]">
            <li><Link href={"/"}><button type="button" className="hover:bg-red-200 transition-all delay-100 ease-in-out active:bg-red-400 px-3 py-2 rounded-md">Home</button></Link></li>
            <li><Link href={"/about"}><button type="button" className="hover:bg-red-200 transition delay-100 active:bg-red-400 px-3 py-2 rounded-md">About</button></Link></li>
            <li><Link href={"/project"}><button type="button" className="hover:bg-red-200 transition delay-100 active:bg-red-400 px-3 py-2 rounded-md">Projects</button></Link></li>
            <li><Link href={"/contact"}><button type="button" className="hover:bg-red-200 transition delay-100 active:bg-red-400  px-3 py-2 rounded-md">Contact</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
'use client'

import Link from "next/link"
import Title from "./Title"
import { usePathname } from "next/navigation"



const Navbar = () => {
  const pathname = usePathname();
  // console.log(pathname);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav className=" min-h-[12vh] flex justify-between items-center max-w-5xl mx-auto">
        <Link href={"/"}><Title name="HD"/></Link>
        <ul className="flex gap-6 font-[500]">
            {
              navItems.map((item)=>(
                <li key={item.path}><Link href={item.path}><button type="button" className={`hover:text-[1rem] hover:text-[#8dbbc4] transition-all delay-120 ease-in-out active:bg-[#dcf9ff] px-3 py-2 rounded-md font-serif font-bold text-xl ${pathname === item.path? "text-[#2789ba]" : "text-[#C6E0FF]"}` }>{item.name}</button></Link></li>
              ))
            }
        </ul>
    </nav>
  )
}

export default Navbar
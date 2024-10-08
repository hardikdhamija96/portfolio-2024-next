"use client";

import Link from "next/link";
import Title from "./Title";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(true);

  function handleMenuChange() {
    setShowMenu((prev) => !prev);
  }
  const pathname = usePathname();
  // console.log(pathname);

  useEffect(() => {
    setShowMenu(true);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <main className="absolute z-[1000] w-full bg-darkBg">
      <nav className="max-h-full w-full">
        <section className="min-h-[12vh] sm:min-h-[20vh] flex justify-between items-center max-w-7xl mx-auto bg-darkBg px-4 sm:max-h-[15vh]">
          <Link href={"/"}>
            <Title name="HD" />
          </Link>
          <div
            className=""
            aria-label={showMenu ? "Open Menu" : "Close Menu"}
            onClick={handleMenuChange}>
            <Icon
              className="text-headingColor text-[4rem] cursor-pointer active:text-[3.6rem]"
              icon={showMenu ? "jam:menu" : "jam:close"}
            />
          </div>
        </section>
        <section className="w-full sm:px-10 bg-darkBg">
          {showMenu ? (
            <></>
          ) : (
            <div className="w-full max-h-[80vh] min-h-[80vh]">
              <p className="absolute text-babyBlue2 -rotate-90 top-[16.6rem] sm:left-10 text-3xl invisible sm:visible">
                Menu
              </p>
              <ul className="flex flex-col sm:pt-12 gap-1 max-w-full sm:max-w-7xl mx-auto bg-darkBg sm:pl-20 md:pl-10 sm:pb-12">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} onClick={() => setShowMenu(true)}>
                      <button
                        type="button"
                        className={`hover:text-[3.8rem] hover:text-headingColor transition-all delay-120 ease-in-out active:drop-shadow-2xl  rounded-md font-sans font-bold sm:text-[4rem] text-[2.7rem] py-3 sm:py-0 pl-8 ${
                          pathname === item.path
                            ? "text-blueGrotto"
                            : "text-babyBlue2"
                        }`}>
                        {item.name}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
              <ThemeSwitcher />
            </div>
          )}
        </section>
      </nav>
    </main>
  );
};

export default Navbar2;

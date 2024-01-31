import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isHiden, setIsHidem] = useState(false);
  const handleClick = () => {
    setIsHidem(!isHiden);
  };
  console.log(isHiden);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={130}  />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* mine  */}
        { isHiden && <ul className={`flex-1 flex justify-end flex-col items-start gap-4 absolute right-4 mt-6 bg-transparent z-10 top-16 lg:hidden `}>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </a>
          </li>
        ))}
       </ul> }
     

        <div className="lg:hidden block">
          <img src={hamburger} alt="hambergur" width={25} height={25} onClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

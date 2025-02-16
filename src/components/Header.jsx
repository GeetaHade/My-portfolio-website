import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-red-900 to bg-red-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            {/* <img
              src="/images/profile2.png"
              width={40}
              height={40}
              alt="Geeta Hade"
            /> */}
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden text-red-200 hover:text-red-400"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end bg-red-400 hover:bg-red-400 text-white"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;

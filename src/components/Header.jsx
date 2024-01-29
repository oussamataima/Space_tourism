import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Hamburger from "./hamburger";
import Close from "./close";

const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  function handleBtn() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="flex justify-between  lg:mt-10 relative z-50">
      <div className="pl-6 pt-6 lg:pl-[55px]  relative">
        <img src="/logo.svg" />
      </div>
      <nav className="nav hidden  md:block relative">
        <ul className="">
          <li
            className={
              location.pathname === "/" ? "mb-[-35px] border_bottom" : ""
            }
          >
            <Link to="/">
              <span className="hidden xl:inline-block" aria-hidden="true">
                00
              </span>
              Home
            </Link>
          </li>
          <li
            className={
              location.pathname === "/destination"
                ? "mb-[-35px] border_bottom"
                : ""
            }
          >
            <Link to="/destination">
              <span className="hidden xl:inline-block" aria-hidden="true">
                01
              </span>
              Destination
            </Link>
          </li>
          <li
            className={
              location.pathname === "/crew" ? "mb-[-35px] border_bottom" : ""
            }
          >
            <Link to="/crew">
              <span className="hidden xl:inline-block" aria-hidden="true">
                02
              </span>
              Crew
            </Link>
          </li>
          <li
            className={
              location.pathname === "/technology"
                ? "mb-[-35px] border_bottom"
                : ""
            }
          >
            <Link to="/technology">
              <span className="hidden xl:inline-block" aria-hidden="true">
                03
              </span>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
      {/* /* nav for mobile */}
      {isOpen && (
        <nav className="block md:hidden">
          <ul className="w-[68vw] h-screen backdrop-blur-xl pt-[118px] pl-8 flex flex-col gap-8">
            <li className="">
              <a className="  " href="#">
                <span className="" aria-hidden="true">
                  00
                </span>
              </a>
              Home
            </li>
            <li className="">
              <a href="#">
                <span className="" aria-hidden="true">
                  01
                </span>
              </a>
              Destination
            </li>
            <li className="">
              <a href="#">
                <span className="" aria-hidden="true">
                  02
                </span>
              </a>
              Crew
            </li>
            <li className="">
              <a href="#">
                <span className="" aria-hidden="true">
                  03
                </span>
              </a>
              Technology
            </li>
          </ul>
        </nav>
      )}
      {isOpen ? (
        <Close
          onClick={handleBtn}
          classes="block md:hidden fixed right-6 top-8 z-100"
        />
      ) : (
        <Hamburger
          onClick={handleBtn}
          classes="block md:hidden fixed right-6 top-8 z-100"
        />
      )}
    </header>
  );
};

export default Header;

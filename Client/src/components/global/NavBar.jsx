import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavBar() {
  return (
    <>
      <div className="flex items-center justify-around py-4 border-b-2">
        <h1 className=" text-2xl font-bold cursor-pointer">Exclusive</h1>
        <GiHamburgerMenu className=" sm:hidden text-3xl" />
        <div className="hidden sm:flex gap-14 text-lg font-medium">
          <Link>Home</Link>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link>Sign Up</Link>
        </div>
        <div className=" hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="what are you looking for?"
            name="searchInput"
            id="searchInput"
            className=" placeholder-sm bg-gray-200 border-4 rounded-sm p-1"
          />
          <FiSearch className=" absolute right-1" />
        </div>
      </div>
    </>
  );
}

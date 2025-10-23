import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-violet-700 text-white px-3 py-2 flex justify-around rounded-bl-4xl rounded-br-4xl items-center">
      <form action="" className="flex items-center gap-3">
        <Input className="border-white border-2 focus-visible:border-rose-400 transition-all duration-300 text-xl focus-visible:ring-0" />
        <FaSearch size={30} className="hover:text-rose-400 transition-all duration-300 cursor-pointer"/>
      </form>
      <h1 className="font-extrabold text-5xl"><a href="/">Book Land</a></h1>
      <div className="flex items-center gap-5">
        <a href="/add-book" className="text-2xl font-semibold">
          Add Book
        </a>

        <a href="/add-book" className="text-2xl font-semibold border-l pl-3">
          Login
        </a>

        <Button className="bg-rose-400 text-2xl font-semibold cursor-pointer hover:bg-rose-500">
          Signup
        </Button>
        <Button className="bg-rose-400 text-2xl font-semibold cursor-pointer hover:bg-rose-500">
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

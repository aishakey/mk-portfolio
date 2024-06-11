"use client";

import Link from "next/link";

const NavLink = ({ to, onClick, children }) => (
  <Link
    href={to}
    className="relative group text-dark-blue cursor-pointer"
    onClick={onClick}
  >
    {children}
    <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-main-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
  </Link>
);

export default NavLink;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <ul>
          <Link href="/breakfast">
            <li>Breakfast</li>
          </Link>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Side</li>
          <li>Liquor</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

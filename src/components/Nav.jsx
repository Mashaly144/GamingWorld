import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex-between space-x-10 ">
        <Link>
          <li>Products</li>
        </Link>
        <Link>
          <li>Apps & Games</li>
        </Link>
        <Link>
          <li>features</li>
        </Link>
        <Link>
          <li>Support</li>
        </Link>
        <Link>
          <li>about</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

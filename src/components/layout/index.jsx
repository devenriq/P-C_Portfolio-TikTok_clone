import React from "react";
import { FaSearch, FaTv, FaMusic } from "react-icons/fa";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <span>
                <FaTv />
              </span>
            </li>
            <li>Siguiendo</li>
            <li>Para ti</li>
            <li>
              <span>
                <FaSearch />
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <span>
            <FaMusic />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </footer>
    </div>
  );
};

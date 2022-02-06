import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ title }) => {
  return (
    <nav className="mb-12 shadow-md navbar bg-neutral ">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle ">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Github Finder",
};

NavBar.propTypes = {
  title: PropTypes.string,
};

export default NavBar;

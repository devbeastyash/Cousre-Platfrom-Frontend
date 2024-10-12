import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <div className="container h-screen bg-slate-300 text-white font-bold w-screen">
        <div className="navbar flex bg-slate-900 justify-between">
          <div className="navleft flex justify-around gap-5">
            <div>
              <span>Home</span>
            </div>
            <div>
              <span>About</span>
            </div>
            <div>
              <span>Contact</span>
            </div>
            <div>
              <span>Blog</span>
            </div>
            <div>
              <span>Careers</span>
            </div>
          </div>
          <div className="navright flex">
            <div>
              <input type="search" name="search" id="navbar-search" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

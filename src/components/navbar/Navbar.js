import React from "react";
import { stylecss } from "../../static__style";

const Navbar = () => {
  //   const style = {
  //     Navbar: {
  //       background: "dodgerblue",
  //       color: "white",
  //       height: "60px",
  //       display: "flex",
  //       alignItems: "center",
  //     },
  //     Logo: {
  //       fontSize: "20px",
  //       cursor: "pointer",
  //     },
  //   };
  const style = {
    Navbar: "bg-[#16213E] h-[80px] flex items-center px-[50px] justify-between",
    h1: "text-white text-[30px]",
    nav__ul: "text-white flex-[0.5] flex justify-around",
    nav__li: "list-none hover:translate-x-4 duration-1000",
  };
  return (
    <div className={stylecss.Navbar}>
      <h1 className={style.h1}>Logo</h1>
      <div className={style.nav__ul}>
        <li className={style.nav__li}>
          <a href="#">Home</a>
        </li>{" "}
        <li className={style.nav__li}>
          <a href="#">Blog</a>
        </li>{" "}
        <li className={style.nav__li}>
          <a href="#">Service</a>
        </li>
      </div>
      <button className="blueColor">bir Narsa</button>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Menu_items from "./Menu_items";
export default function Nav() {
  const [clicked, setClick] = useState(false);
  const handleClicked = () => {
    setClick(!clicked);
    console.log(clicked);
  };
  return (
    <>
      <nav
        className={
          clicked
            ? "header_nav header_nav--open"
            : "header_nav header_nav--closed"
        }
      >
        <div onClick={handleClicked} className="header_nav_menu-icon">
          <i class={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={
            clicked
              ? "header_nav_ul header_nav_ul--open"
              : "header_nav_ul header_nav_ul--closed"
          }
        ></ul>
        {Menu_items.map((item) => {
          return (
            <li className={item.cname}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </nav>
    </>
  );
}

// function toggleNavbar() {
//     var x = document.querySelector(".nav-mobile");
//     if (x.style.maxHeight) {
//       x.style.maxHeight = null;
//     } else {
//       x.style.maxHeight = x.scrollHeight + "px";
//     }
//   }

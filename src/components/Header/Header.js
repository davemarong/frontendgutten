import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
export default function Header() {
  return (
    <>
      <header className="header">
        <Nav />
        <Logo />
        <Searchbox />
      </header>
    </>
  );
}

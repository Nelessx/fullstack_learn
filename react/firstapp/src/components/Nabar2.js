import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar2() {
  return (
    <div>
      <AnchorLink href="#hero">Home</AnchorLink>
      <AnchorLink href="#service" >Service</AnchorLink>
      <AnchorLink href="#pricing">Pricing</AnchorLink>
      <AnchorLink href="#footer"  >Footer</AnchorLink>
    </div>
  );
}
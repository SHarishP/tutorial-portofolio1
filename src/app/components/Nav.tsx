"use client";
// 13.3 Code Nav.tsx
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "journey",
  },
  {
    name: "work",
  },
  {
    name: "contact",
  },
];

interface IProp {
  containerStyles: any;
  listStyles: any;
  linkStyles: any;
  spy: any;
}

const Nav = ({ containerStyles, listStyles, linkStyles, spy }: IProp) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <ScrollLink
              spy={spy}
              key={index}
              to={link.name}
              activeClass="active"
              smooth
              className={linkStyles}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

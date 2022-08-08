import { useState } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { NavItems } from "../../data/NavItems";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavList,
  NavItem,
  NavLink,
  ProFile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/my-profile.jpg" />
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItem
                key={index}
                index={index}
                onClick={() => setMenuOpen(false)}
                menuOpen={menuOpen}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <ProFile>
                      <img src="./images/my-profile.jpg" alt="umair riaz" />
                      Umair Riaz
                    </ProFile>
                  </NavLink>
                ) : null}
                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink
                      href="https://www.youtube.com/c/centralcityacademyofmathematics"
                      target="_blank"
                    >
                      <FaYoutube />
                    </NavLink>
                    <NavLink
                      href="https://github.com/umairriaz789"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>
                    <NavLink
                      href="https://twitter.com/umairriaz789"
                      target="_blank"
                    >
                      <FaTwitter />
                    </NavLink>
                  </SocialIcons>
                ) : null}
                {navItem.hasCTA ? (
                  <CTAButton
                    href="https://github.com/umairriaz789"
                    target="_blank"
                  >
                    GitHUb
                  </CTAButton>
                ) : null}
              </NavItem>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

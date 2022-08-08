import styled, { keyframes, css } from "styled-components";

const navItemFade = keyframes`{
  from {
    opacity: 0;
    transform: translate(50px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
}`;

const navItemAnimation = ({ index }) => css`
  animation: ${navItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(2, 12, 27, 0.8);
  position: fixed;
  z-index: 98;
  top: ${({ scrollDirection }) =>
    scrollDirection === "down" ? "-80px" : "40px"};
  transition: all 1s ease-in-out;
`;

export const Logo = styled.img`
  width: 55px;
  border-radius: 50%;
`;

export const MenuIcon = styled.div`
  position: absolute;
  right: 20px;
  z-index: 999;
  cursor: pointer;
  background: ${({ menuOpen, theme }) =>
    menuOpen ? "none" : theme.colors.lightNavyBlue};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  transition: ${({ theme }) => theme.transition};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  } ;
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgb(255, 255, 255) 100%
  );
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(2)" : "none"};
  transition: ${({ theme }) => theme.transition};
`;

export const LineTwo = styled.div`
  width: 30 px;
  height: 3px;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgb(255, 255, 255) 100%
  );
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  transition: ${({ theme }) => theme.transition};
`;

export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? 0 : "15px")};
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgb(255, 255, 255) 100%
  );
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) translate(-5px, -6px) scaleX(2)" : "none"};
  transition: ${({ theme }) => theme.transition};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    right: ${({ menuOpen }) => (menuOpen ? "0rem" : "-26rem")};
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  } ;
`;

export const NavItem = styled.li`
  margin: 0.2rem 0.7rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : null)};
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &::after {
    content: "";
    display: block;
    height: 3px;
    background: ${({ theme }) => theme.colors.orange};
    width: 0%;
    transition: all ease-in-out 300ms;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const ProFile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 9rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
    }
    span {
      display: block;
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      font-size: 15px;
      letter-spacing: 1.5px;

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: none;

  svg {
    font-size: 25px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;

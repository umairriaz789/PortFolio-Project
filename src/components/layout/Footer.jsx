import {
  CodedBy,
  CopyRight,
  FooterNav,
  StyledFooter,
} from "../styles/layout/Footer.styled";

export const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <StyledFooter>
        <FooterNav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </FooterNav>
        <CodedBy>DApp Development</CodedBy>
        <CopyRight>
          &copy; March 2022 - {months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}{" "}
        </CopyRight>
      </StyledFooter>
    </>
  );
};

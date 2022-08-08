import { FaArrowDown, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  HeroContent,
  StyledArrowDown,
  StyledHeroSection,
  HeroSocialIcons,
} from "../styles/sections/HeroSection.styled";
import { Icon } from "../styles/common/Icon.styled";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>UMAIR RIAZ</h1>
        <h3>{"{BlockChain Developer}"}</h3>
        <p>Smart Contract . WEB 3 . JavaScript </p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Hire Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <Icon href="https://www.youtube.com/c/centralcityacademyofmathematics" target="_blank">
          <FaYoutube />
        </Icon>
        <Icon href="https://github.com/umairriaz789" target="_blank">
          <FaGithub />
        </Icon>
        <Icon href="https://www.linkedin.com/in/umair-riaz-1a2090141/" target="_blank">
          <FaLinkedin />
        </Icon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};

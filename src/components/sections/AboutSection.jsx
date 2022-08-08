import { FaLinkedin } from "react-icons/fa";
import {
  AboutContent,
  StyledAboutSection,
  StyledEmoji,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledImage,
  StyledHeading,
} from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage
            src="./images/my-profile.jpg"
            alt="Chaoo Charles"
          ></StyledImage>
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>
            I am Umair Riaz, a BlockChian Developer  <strong> based in Lahore, Pakistan</strong>.
            I will write a  Standard ERC-20 and ERC-721 NFT's Smart Contract for Ethereum chain  and{" "}
            <strong>Binance Chain.</strong>.
          </p>
          <p>
            One of my favorite activities is to educate and mentor others in the
            field to fulfill their potential and deepen my knowledge. You can
            find more about this on my{" "}
            <a
              href="https://www.youtube.com/c/centralcityacademyofmathematics"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Channel.
            </a>
          </p>
          <p>
            To use my skills and potential abilities in
            the competitive environment with
            honesty and integrity. To get{" "}
            <strong>experience</strong> in a growing organization
            that offers <strong>challenging</strong> growth
            opportunities <strong>.</strong> 😊
          </p>
          <CTAButton
            href="https://www.linkedin.com/in/umair-riaz-1a2090141/"
            target="_blank"
          >
            <FaLinkedin /> <span> Linkedin</span>
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};

import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServicesSection.styled";
import { FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";

export const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services">
        <SectionHeading>
          <h1>Services</h1>
          <p>Excited to work with you</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>DApp Development</h1>
            <p>
              I develop Decentralized Application on Ethereum Network using HTML, CSS and JavaScript (React Redux Tolkit)
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaLaptopCode />
            </IconWrapper>
            <h1>Smart Contract</h1>
            <p>
              I will create a  Standard ERC-20 and ERC-721 NFT's Smart Contract for Ethereum chain and Binance Chain. 
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaBrain />
            </IconWrapper>
            <h1>Mentorship</h1>
            <p>
              You can book a session with me for mentorship on understanding Mathematics and Programing Concept.
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};

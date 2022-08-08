import {
  ContactInfo,
  ImageWrapper,
  DetailsWrapper,
  StyledContactSection,
} from "../styles/sections/ContactSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Contact</h1>
          <p>Get in touch</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              I'd love if you reached out to me. Even if it's just to say
              "Hey!". Don't hesitate! Drop me a line and I’ll get back to you
              ASAP!
            </p>
            <p>
              <i>
                For gig and advertising opportunities, begin your subject with
                <strong>"Gig"</strong>
              </i>
            </p>
            <a>Phone: +92 346 4440030 </a>
            <div>
              <a href="mailto:umairriaz789@gmail.com">
                <FaEnvelope /> <span>umairriaz789@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/umair-riaz-1a2090141/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> <span>Linkedin</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/chat.svg" alt="contact" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};

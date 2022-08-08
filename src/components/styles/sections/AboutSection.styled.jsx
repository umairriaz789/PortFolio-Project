import styled, { keyframes } from "styled-components";

const wave = keyframes`{
  0% {
      transform: rotate(0);
  }
  10% {
      transform: rotate(14deg);
  }
  20% {
      transform: rotate(-8deg);
  }
  30% {
      transform: rotate(14deg);
  }
  40% {
      transform: rotate(-4deg);
  }
  50% {
      transform: rotate(10deg);
  }
  60% {
      transform: rotate(0);
  }
  100% {
      transform: rotate(0);
  }
}`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledAboutSection = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 0 5rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  } ;
`;

export const ImageContainer = styled.div`
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 4rem;
  } ;
`;

export const StyledImage = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
`;

export const DarkCircle = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  background: ${({ theme }) => theme.colors.navyBlue};
`;

export const GradientCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  animation: ${rotate} 5s linear infinite;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.orange} 0%,
    ${({ theme }) => theme.colors.green} 50%,
    ${({ theme }) => theme.colors.purple} 100%
  );
`;

export const AboutContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    padding: 0;
    margin: 0 0 1.45rem;
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 1.3rem;
    }
    h2 {
      font-size: 3rem;
    }
  } ;
`;

export const StyledHeading = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const StyledEmoji = styled.span`
  display: inline-block;
  animation: ${wave} 3s infinite;
  transform-origin: 70% 70%;
`;

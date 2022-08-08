import styled, { keyframes } from "styled-components";

const typing = keyframes`{
    75% {
        width: 0ch;
        color: ${({ theme }) => theme.colors.orange};
    }
    100% {
        width: 27ch;
    }
  }`;

const blink = keyframes`{
    0% {
        border-right: 4px solid rgba(255, 255, 255, 0);
    }
    100% {
        border-right: 4px solid rgb(194, 194, 194);
    }
  }`;

const bounce = keyframes`{
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
       transform: translateY(-30px);
     }
      60% {
        transform: translateY(-15px);
      }
  }`;

export const StyledHeroSection = styled.section`
  width: 100%;
  min-height: 90vh;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url("./images/landing-page.png") center no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HeroContent = styled.section`
  width: 100%;
  max-width: 58rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  position: absolute;

  h1 {
    letter-spacing: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    animation: ${typing} 5s steps(27), ${blink} 1s ease-in-out 8s infinite;
    border-right: 4px solid #fafafa;
    margin: auto;
    width: 27ch;
  }
  h3 {
    font-size: 4rem;
    margin: 1.5rem 0;
    /* color: ${({ theme }) => theme.colors.orange} */
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.orange} 0%,
      ${({ theme }) => theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    text-transform: none;
    font-size: 1.7rem;
    font-weight: 400;
  }

  div {
    margin: 2.5rem 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      letter-spacing: 1rem;
      font-size: 1.5rem;
      width: 29ch;
    }
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }
  } ;
`;

export const StyledArrowDown = styled.a`
  position: absolute;
  bottom: 50px;
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${bounce} 2s infinite 8s;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const HeroSocialIcons = styled.div`
  position: fixed;
  right: 20px;

  a {
    height: 3rem;
    width: 3rem;
    margin: 0 0 10px 0;
  }

  svg {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    bottom: 50px;

    a {
      height: 2.2rem;
      width: 2.2rem;
      margin: 0 0 7px 0;
    }
    svg {
      font-size: 14px;
    }
  } ;
`;

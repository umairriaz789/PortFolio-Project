import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const SingleProject = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
    margin: 10rem 0;

    a {
      margin-right: 0;
      margin-left: 20px;

      img {
        transform: rotateY(-30deg);
      }
      div {
        transform: skew(3deg, -3deg) rotateY(-30deg);
      }

      &:hover {
        img {
          transform: rotateY(0deg);
        }
        div {
          transform: skew(-3deg, 3deg) rotateY(0deg);
        }
      }
    }

    div {
      a {
        margin: 2rem 2rem 2rem 0;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    &:nth-child(even) {
      flex-direction: column;

      a {
        margin: 0 0 3rem 0;

        img {
          transform: rotateY(0deg);
        }
        div {
          transform: skew(3deg, -3deg) rotateY(0deg);
        }

        &:hover {
          div {
            transform: skew(-3deg, 3deg) rotateY(0deg);
          }
        }
      }
    }
  }
`;

export const ProjectImageContainer = styled.a`
  cursor: pointer;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  img {
    border-radius: 20px;
    width: 90%;
    z-index: 3;
    transform: rotateY(30deg);
    transition: ${({ theme }) => theme.transition};
  }

  &:hover {
    img {
      transform: rotateY(0deg);
      transition: ${({ theme }) => theme.transition};
    }

    div {
      transform: skew(-3deg, 3deg) rotateY(0deg);
      transition: ${({ theme }) => theme.transition};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
    justify-content: flex-start;

    img {
      transform: rotateY(0deg);
      width: 80%;
      border-radius: 9px;
    }
  }
`;

export const SlantedCard = styled.div`
  position: absolute;
  width: 90%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.orange} 0%,
    ${({ theme }) => theme.colors.purple} 100%
  );
  border-radius: 20px;
  z-index: 2;
  transform: skew(3deg, -3deg) rotateY(30deg);
  transition: ${({ theme }) => theme.transition};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: skew(3deg, -3deg) rotateY(0deg);
    width: 80%;
    border-radius: 9px;
  }
`;

export const ProjectDescription = styled.div`
  flex: 1;

  h1 {
    font-size: 2rem;
    margin: 0 0 2rem 0;
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
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    text-align: justify;
  }

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin: 2rem 2rem 2rem 0;
      font-size: 1.2rem;

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  span {
    background: #0e213c;
    display: inline-block;
    padding: 7px;
    border-radius: 5px;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 12px;
    }
  }
`;

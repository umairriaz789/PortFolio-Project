import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 7rem;

  h1 {
    text-transform: uppercase;
    display: inline-block;
    font-size: 2rem;
    margin: 0.5rem 0 1.5rem;
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 5px;
      background: ${({ theme }) => theme.colors.purple};
      width: 50%;
      position: absolute;
      left: 50%;
      bottom: -7px;
      transform: translateX(-50%);
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    margin-bottom: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: left;
  } ;
`;

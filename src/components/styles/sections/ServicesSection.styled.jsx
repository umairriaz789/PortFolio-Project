import styled from "styled-components";

export const StyledServicesSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const ServicesItems = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const SingleService = styled.div`
  min-height: 20rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  cursor: default;
  background: rgba(4, 20, 44, 1);
  margin-right: 2rem;
  padding: 1.2rem;
  border-radius: 7px;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translate(0, -1rem);
  }

  &:last-child {
    margin-right: 0;
  }

  h1 {
    font-size: 2rem;
    margin: 1.5rem 0;
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
    font-size: 1.2rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 0 4rem 0;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  font-size: 28px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.navyBlue};
  background: ${({ theme }) => theme.colors.white};
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; ;
`;

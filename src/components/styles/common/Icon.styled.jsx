import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Icon = styled.a`
  background: rgba(249, 105, 14, 0.1);
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  margin-right: 7px;
  cursor: pointer;
  font-size: 14px;

  svg {
    color: rgb(249, 105, 14);
    transition: ${({ theme }) => theme.transition};
  }

  &:hover {
    svg {
      animation: ${rotate} 1.5s linear infinite;
      color: white;
    }
  }
`;

import styled from "styled-components";
import { blue, blueDark, orange, silver, white } from "./colors";

const Button = styled.button`
  border-radius: 30px;
  border: 1px solid transparent;
  color: ${white};
  display: block;
  font-weight: bold;
  min-width: 212px;
  padding: 1rem;

  &:hover {
    background-color: ${white};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${silver};
    border: inherit;
    color: ${blueDark};
  }
`;

export const ButtonPrimary = Button.extend `
  background-color: ${orange};

  &:hover {
    border: 1px solid ${orange};
    color: ${orange};
  }
`;
export const ButtonSecondary = Button.extend `
  background-color: ${blue};

  &:hover {
    border: 1px solid ${blue};
    color: ${blue};
  }
`;

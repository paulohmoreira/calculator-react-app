import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: fit-content;
  padding: 0.8rem 0;
  height: 60px;
  border: none;
  border-radius: .5rem;
  background-color: ${props => props.bgColor ? props.bgColor : "var(--key-background)"};
  box-shadow:  ${props => props.boxShadow ? `0 3px ${props.boxShadow}` : "0 3px var(--key-shadow)"};
  color: ${props => props.color ? props.color : "var(--text-main-keys)"};
  font-size: ${props => props.fontSize ? `${props.fontSize}rem` : "2rem"};
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  cursor: pointer;
  flex: 1;
  line-height: 1.5;

  &:hover {
    opacity: .6;
  }
`
import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: fit-content;
  padding: 0.8rem 0;
  height: 60px;
  border: none;
  border-radius: .5rem;
  background-color: ${props => props.bgColor ? props.bgColor : "var(--key-background)"};
  box-shadow:  ${props => props.boxShadow ? `0 4px ${props.boxShadow}` : "0 4px var(--key-shadow)"};
  color: ${props => props.color ? props.color : "var(--text-main-keys)"};
  font-size: ${props => props.fontSize ? "1.25rem" : "2rem"};
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  cursor: pointer;
  flex: 1;
  line-height: 1.5;

  &:hover {
    filter: brightness(1.5);
  }

  @media screen and (min-width: 539.9px) {
    padding: 0;
    padding-top: .5rem;
    font-size: ${props => props.fontSize ? "1.75rem" : "2.5rem"};
    line-height: ${props => props.fontSize ? "1" : "1"};
  }
  @media screen and (max-height: 700px) {
    height: 50px;
    font-size: ${props => props.fontSize ? "1.25rem" : "2.0rem"};
    line-height: ${props => props.fontSize ? "1" : "1"};
  }
`
import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: fit-content;
  padding: 0.8rem 0;
  height: 60px;
  border: none;
  border-radius: .5rem;
  background-color: ${props => props.bgColor ? props.bgColor : "hsl(30, 25%, 89%)"};
  box-shadow:  ${props => props.boxShadow ? `0 3px ${props.boxShadow}` : "0 3px hsl(28, 16%, 65%)"};
  color: ${props => props.color ? props.color : "hsl(221, 14%, 31%)"};
  font-size: ${props => props.fontSize ? `${props.fontSize}rem` : "2rem"};
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  cursor: pointer;
  flex: 1;
  line-height: 1.5;

  &:hover {
    opacity: .6;
  }
`;
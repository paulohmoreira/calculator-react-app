import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  margin-top: 2rem;

  input {
    width: 100%;
    height: 80px;
    background-color: var(--screen-background);
    color: var(--text-input);
    border: 0;
    border-radius: .5rem;
    font-size: 2.125rem;
    padding: 1rem;
    text-align: right;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
  }
`
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--main-background);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 90%;
  max-width: 540px;
  @media screen and (max-height: 700px) {
    max-width: 450px;
  }

`

export const Display = styled.div`
  margin-bottom: 1.5rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`

export const KeyPad = styled.div`
  padding: 1.5rem;
  background-color: var(--keypad-background);
  border-radius: .5rem;
  ${Row}:nth-child(1) {
    margin: 0;
  }
  ${Row}:nth-child(5) {
    margin: 0;
  }

  @media screen and (min-width: 424.9px) {
    ${Row} {
      gap: 1.25rem;
      margin: 1.25rem 0;
    }
  }
  @media screen and (min-width: 539.9px) {
    padding: 2rem 2.05rem;
    ${Row} {
      gap: 1.5rem;
      margin: 1.5rem 0;
    }
  }
  @media screen and (max-height: 700px) {
    padding: 1.25rem;
    ${Row} {
      gap: 1rem;
      margin: 1rem 0;
    }
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-input);
  font-size: 1.125rem;
  font-family: 'League Spartan', sans-serif;

  @media screen and (max-height: 700px) {
    font-size: 1rem;
    margin-bottom: -1rem;
  }
`

export const WrapperSwitch = styled.div`
  display: flex;
  width: 135px;
  font-size: .75rem;
  align-items: flex-end;
  justify-content: space-between;
  letter-spacing: 1px;
`

export const Switch = styled.div`
    flex: 0.75;
    justify-content: center;
    align-items: center;
    margin-left: .75rem;

    > div:first-of-type {
        width: 80%;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        margin: .375rem auto;
    }
`

export const SwitcherContainer = styled.div`
    background-color: var(--toggle-background);
    width: 72px;
      min-height: 26px;
    border-radius: 2rem;
    position: relative;
    z-index: 20;
    cursor: pointer;
`

export const Switcher = styled.div`
    width: 17px;
      height: 17px;
    min-height: 13px;
    background-color: var(--toggle);
    border-radius: 50%;
    position: absolute;
    left: ${(props) => props.theme};
    top: 19%;
    transition: all 0.1s linear;
`
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: hsl(222, 26%, 31%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 90%;
`

export const Display = styled.div`
  margin-bottom: 1.5rem;
`

export const KeyPad = styled.div`
  padding: 1.5rem;
  background-color: hsl(223, 31%, 20%);
  border-radius: .5rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: .825rem;
  margin: .825rem 0;
`
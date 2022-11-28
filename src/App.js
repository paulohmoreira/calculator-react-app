import { useState } from "react";

import { Container, Content, Row } from "./styles";

import Input from "./components/Input"
import Button from "./components/Button"

const App = () => {
  // Retorna um valor e uma função para atualizar o valor
  const [currentNumber, setCurrentNumber] = useState(0);

  // Adiciona os dígitos no input
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev}`)
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="X" />
          <Button label="/" />
          <Button label="C" />
          <Button label="<-" />
        </Row>
        <Row>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="-" />
        </Row>
        <Row>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="+" />
        </Row>
        <Row>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="=" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;

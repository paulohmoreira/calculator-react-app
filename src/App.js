import { useState } from "react";

import { Container, Content, Row } from "./styles";

import Input from "./components/Input"
import Button from "./components/Button"

const App = () => {
  // Retorna um valor e uma função para atualizar o valor do Input
  const [currentNumber, setCurrentNumber] = useState("0");
  
  // Retorna um valor e uma função para atualizar o valor das operações
  const [firstNumber, setFirstNumber] = useState("0");

  // Adiciona os dígitos no input
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  }

  // Limpar input
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    console.log(firstNumber, currentNumber)
  }

  // Função de soma
  const handleSumNumbers = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      console.log(firstNumber, currentNumber)
    } else {
      console.log(firstNumber, currentNumber)
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="X" />
          <Button label="/" />
          <Button label="C" onClick={handleOnClear} />
          <Button label="<-" />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;

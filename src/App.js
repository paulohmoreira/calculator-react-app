import { useState } from "react";

import { Container, Content, Display, KeyPad, Row } from "./styles";

import Input from "./components/Input"
import Button from "./components/Button"

const App = () => {
  // Retorna um valor e uma função para manipular o valor mostrado no Input
  const [currentNumber, setCurrentNumber] = useState("0");
  
  // ... manipular o primeiro valor das operações
  const [firstNumber, setFirstNumber] = useState("0");

  //... manipular o operador das operações
  const [operation, setOperation] = useState("");

  // Adiciona os dígitos no input
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  }

  // Limpar input
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
    console.log(firstNumber, currentNumber, operation)
  }

  // Função de soma
  const handleSumNumbers = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
      setFirstNumber("0");
    }
  }

  // Função de subtrair
  const handleMinusNumbers = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
      setFirstNumber("0");
    }
  }

  // Função de multiplicar
  const handleMultiplyNumbers = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
      setFirstNumber("0");
    }
  }

  // Função de dividir
  const handleDivideNumbers = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
      setFirstNumber("0");
    }
  }

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;

        default:
          break;
      }
    }
  }

  const deleteValue = () => {
    setCurrentNumber(currentNumber.substring(0, currentNumber.length -1))
  }

  return (
    <Container>
      <Content>
        <Display>
          <Input value={currentNumber}/>
        </Display>
        <KeyPad>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button bgColor={"hsl(225, 21%, 49%)"} boxShadow={"hsl(224, 28%, 35%)"} color={"#FFF"} fontSize={1.25} label="DEL" 
            onClick={() => currentNumber.length === 1 && currentNumber === "0" ? "" : deleteValue()} />
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
            <Button label="-" onClick={handleMinusNumbers} />
          </Row>
          
          <Row>
            <Button label="." onClick={() => handleAddNumber(".")} />
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="/" onClick={handleDivideNumbers} />
            <Button label="x" onClick={handleMultiplyNumbers}/>
          </Row>
          <Row>
            <Button bgColor={"hsl(225, 21%, 49%)"} boxShadow={"hsl(224, 28%, 35%)"} color={"#FFF"} fontSize={1.25} label="RESET" onClick={handleOnClear} />
            <Button bgColor={"hsl(6, 63%, 50%)"} boxShadow={"hsl(6, 70%, 34%)"} color={"#FFF"} fontSize={1.25} label="=" onClick={handleEquals} />
          </Row>
        </KeyPad>
      </Content>
    </Container>
  );
}

export default App;

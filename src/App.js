import { useState, useEffect } from "react";

import { 
  Container, 
  Content, 
  Display, 
  KeyPad, 
  Row, 
  Header, 
  WrapperSwitch, 
  Switch, 
  SwitcherContainer, 
  Switcher 
} from "./styles/styles";
import Theme1 from "./styles/theme1";
import Theme2 from "./styles/theme2";
import Theme3 from "./styles/theme3";

import Input from "./components/Input"
import Button from "./components/Button"

const App = () => {
  // Retorna um valor e uma função para manipular o valor mostrado no Input
  const [currentNumber, setCurrentNumber] = useState("0");
  
  // ... manipular o primeiro valor das operações
  const [firstNumber, setFirstNumber] = useState("0");

  //... manipular o operador das operações
  const [operation, setOperation] = useState("");

  //... manipular o tema atual
  const [theme, setTheme] = useState(1);

  // Buscar tema salvo no localstorage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("prefers-color-scheme"));
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  //... manipular o switcher de tema
  const [switcher, setSwitcher] = useState("8%");

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

  const handleTheme = () => {
    if (theme === 1){
      setTheme(2);
      localStorage.setItem("prefers-color-scheme", JSON.stringify(2));
      setSwitcher("38%");
    } else if (theme === 2){
      setTheme(3);
      localStorage.setItem("prefers-color-scheme", JSON.stringify(3));
      setSwitcher("70%");
    } else {
      setTheme(1);
      localStorage.setItem("prefers-color-scheme", JSON.stringify(1));
      setSwitcher("8%");
    }
  }

  return (
    <Container>
      { theme === 1 && <Theme1 /> }
      { theme === 2 && <Theme2 /> }
      { theme === 3 && <Theme3 /> }
      <Content>
        <Row>
        <Header>
          <h1>calc</h1>
          <WrapperSwitch>
            THEME
            <Switch>
              <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <SwitcherContainer onClick={handleTheme}>
                <Switcher theme={switcher} />
              </SwitcherContainer>
            </Switch>
          </WrapperSwitch>
        </Header>
        </Row>
        <Display>
          <Input value={currentNumber}/>
        </Display>
        <KeyPad>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button 
            bgColor={"var(--key--del-reset-background)"} 
            boxShadow={"var(--key-del-reset-shadow)"} 
            color={"var(--text-key-del-reset)"} 
            fontSize={1.25} 
            label="DEL" 
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
            <Button 
            bgColor={"var(--key--del-reset-background)"} 
            boxShadow={"var(--key-del-reset-shadow)"} 
            color={"var(--text-key-del-reset)"} 
            fontSize={1.25} 
            label="RESET" 
            onClick={handleOnClear} />
            <Button 
            bgColor={"var(--key-equals-background)"} 
            boxShadow={"var(--key-equals-shadow)"} 
            color={"var(--text-key-equals)"} 
            fontSize={1.25} 
            label="=" 
            onClick={handleEquals} />
          </Row>
        </KeyPad>
      </Content>
    </Container>
  );
}

export default App;

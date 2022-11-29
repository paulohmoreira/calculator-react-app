import { ButtonContainer } from "./styles";

const Button = ({fontSize, label, onClick}) => {
  return (
    <ButtonContainer fontSize={fontSize} onClick={onClick}>
     {label}
    </ButtonContainer>
  );
}

export default Button;
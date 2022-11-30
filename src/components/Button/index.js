import { ButtonContainer } from "./styles";

const Button = ({bgColor, boxShadow, color, fontSize, label, onClick}) => {
  return (
    <ButtonContainer bgColor={bgColor} boxShadow={boxShadow} color={color} fontSize={fontSize} onClick={onClick}>
     {label}
    </ButtonContainer>
  );
}

export default Button;
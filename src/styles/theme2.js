import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html:root {
  // Backgrounds
  --main-background: hsl(0, 0%, 90%);
  --keypad-background: hsl(0, 5%, 81%);
  --toggle-background: hsl(0, 5%, 81%);
  --screen-background: hsl(0, 0%, 93%);

  // Toggle
  --toggle: hsl(25, 98%, 40%);

  // Keys
  --key-background: hsl(45, 7%, 89%);
  --key-shadow: hsl(35, 11%, 61%);
  --key--del-reset-background: hsl(185, 42%, 37%);
  --key-del-reset-shadow: hsl(185, 58%, 25%);
  --key-equals-background: hsl(25, 98%, 40%);
  --key-equals-shadow: hsl(25, 99%, 27%);

  // Text
  --text-input: hsl(60, 10%, 19%);
  --text-main-keys: hsl(60, 10%, 19%);
  --text-key-del-reset: hsl(0, 0%, 100%);
  --text-key-equals: hsl(0, 0%, 100%);
 }
`
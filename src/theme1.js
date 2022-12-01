import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html:root {
  // Backgrounds
  --main-background: hsl(222, 26%, 31%);
  --keypad-background: hsl(223, 31%, 20%);
  --toggle-background: hsl(223, 31%, 20%);
  --screen-background: hsl(224, 36%, 15%);

  // Toggle
  --toggle: hsl(6, 63%, 50%);

  // Keys
  --key-background: hsl(30, 25%, 89%);
  --key-shadow: hsl(28, 16%, 65%);
  --key--del-reset-background: hsl(225, 21%, 49%);
  --key-del-reset-shadow: hsl(224, 28%, 35%);
  --key-equals-background: hsl(6, 63%, 50%);
  --key-equals-shadow: hsl(6, 70%, 34%);

  // Text
  --text-input: hsl(0, 0%, 100%);
  --text-main-keys: hsl(221, 14%, 31%);
  --text-key-del-reset: hsl(0, 0%, 100%);
  --text-key-equals: hsl(0, 0%, 100%);
 }
`
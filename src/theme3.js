import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html:root {
  // Backgrounds
  --main-background: hsl(268, 75%, 9%);
  --keypad-background: hsl(268, 71%, 12%);
  --toggle-background: hsl(268, 71%, 12%);
  --screen-background: hsl(268, 71%, 12%);

  // Toggle
  --toggle: hsl(176, 100%, 44%);

  // Keys
  --key-background: hsl(268, 47%, 21%);
  --key-shadow: hsl(290, 70%, 36%);
  --key--del-reset-background: hsl(281, 89%, 26%);
  --key-del-reset-shadow: hsl(285, 91%, 52%);
  --key-equals-background: hsl(176, 100%, 44%);
  --key-equals-shadow: hsl(177, 92%, 70%);

  // Text
  --text-input: hsl(52, 100%, 62%);
  --text-main-keys: hsl(52, 100%, 62%);
  --text-key-del-reset: hsl(0, 0%, 100%);
  --text-key-equals: hsl(198, 20%, 13%);
 }
`
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/global";
import { defaultTheme } from "./Styles/Themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello Word</h1>
    </ThemeProvider>
  );
}

import {createGlobalStyle} from "styled-components"
import { GlobalState } from "./Global/GlobalState";
import Router from "./routes/Router";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family:'Roboto', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;

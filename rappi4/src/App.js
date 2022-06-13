import { GlobalContext } from "./Global/GlobalContext";
import Router from "./routes/Coordinator";

function App() {
  return (
    <>
      <GlobalContext>
        <Router />
      </GlobalContext>
    </>
  );
}

export default App;

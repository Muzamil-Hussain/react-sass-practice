import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div classNaLme="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;

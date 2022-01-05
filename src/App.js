import { BrowserRouter } from "react-router-dom";

import { Footer, Header, Navbar } from "./components";
import { About, PopularTours, Reviews } from "./containers";

function App() {
  return (
    <div classNaLme="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <PopularTours />
        <Reviews />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

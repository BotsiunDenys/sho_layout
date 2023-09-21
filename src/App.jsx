import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./components/PagesWrapper/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

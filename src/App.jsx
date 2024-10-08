import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListProduct from "./pages/ListProduct";
// import Carousel from "./components/Carousel"; // Path ke Carousel

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

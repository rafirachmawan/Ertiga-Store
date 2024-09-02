import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* // <Route path="/result" element={<Result />} />
          // <Route path="/detail" element={<DetailCar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

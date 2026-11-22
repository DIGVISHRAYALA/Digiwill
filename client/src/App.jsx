
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Grid from "./pages/Grid";
import TableEx from "./pages/TableEx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="table" element={<TableEx />} />
      </Routes>
    </>
  );
}

export default App;

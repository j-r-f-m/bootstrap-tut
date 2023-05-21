import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Grid from "./pages/Grid";
import TableEx from "./pages/TableEx";
import FormEx from "./pages/FormEx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/table" element={<TableEx />} />
        <Route path="/form" element={<FormEx />} />
      </Routes>
    </>
  );
}

export default App;

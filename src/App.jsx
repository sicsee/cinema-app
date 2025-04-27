import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Footer from "./components/footer";
import Coming from "./screens/coming";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming" element={<Coming />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Documents from "./pages/Documents";
import Gia9 from "./pages/Gia9";
import Gia11 from "./pages/Gia11";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/gia9" element={<Gia9 />} />
        <Route path="/gia11" element={<Gia11 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;

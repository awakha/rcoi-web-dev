import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import Home from './pages/Home.js';
import News from './pages/News/News.js';
import Documents from './pages/Documents.js';
import Gia9 from './pages/Gia9.js';
import Gia11 from './pages/Gia11.js';
import Contacts from './components/AboutUs/Contacts.js';

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
        <Route path="/about" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

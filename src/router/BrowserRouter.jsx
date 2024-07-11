import { Routes, Route } from 'react-router-dom';
import Contacts from '../components/contactsPage/Contacts';
import Portfolio from '../components/portfolioPage/Portfolio';
import HomePage from '../components/homepage/HomePage';
import Skills from '../components/skillsPage/Skills';
import About from '../components/aboutPage/About';
import Blog from '../components/blog/Blogs';

function App() {

  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contacts" element={<Blog />} />
      <Route path="/settings" element={<Skills />} />
      <Route path="/settings" element={<Portfolio />} />
      <Route path="/settings" element={<HomePage />} />
      <Route path="/settings" element={<Contacts />} />
    </Routes>
  );
}

export default App;

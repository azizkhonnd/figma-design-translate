import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Portfolio from './components/portfolio-page/Portfolio';
import Skills from './components/skills/Skills';
import Blog from './components/blog/Blogs';
import HomePage from './components/homepage/HomePage';
import All from './components/homepage/all/All';
import UIDesign from './components/homepage/all/ui-design/UIDesign';
import UXDesign from './components/homepage/all/ux-design/UXdesign';
import ProductDesign from './components/homepage/all/product/Product';
import Articles from './components/homepage/all/articles/Articles';
import Tutorials from './components/homepage/all/tutorials/Tutorials';
import News from './components/homepage/all/news/News';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/all" element={<All />} />
        <Route path="/ui-design" element={<UIDesign />} />
        <Route path="/ux-design" element={<UXDesign />} />
        <Route path="/product-design" element={<ProductDesign />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;

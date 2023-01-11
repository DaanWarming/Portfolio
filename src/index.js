import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';
import indexStyles from "./index.css"
import reportWebVitals from './reportWebVitals';
import ReadingList from './pages/ReadingList/ReadingList';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routesFromArticles from "./components/Articles/articles.js"
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {IntlProvider} from 'react-intl';

import Wrapper from './components/Wrapper';
import ReadingList22 from './pages/ReadingList/ReadingList22';
import ReadingList23 from './pages/ReadingList/ReadingList23';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [darkMode, setDarkMode] = useState("dark")

  

  function toggleDarkMode() {
    if (isDarkMode) {
      setDarkMode("light")
      setIsDarkMode(!isDarkMode)
    } else {
      setDarkMode("dark")
      setIsDarkMode(!isDarkMode)
    }    
  }

  return (
    <React.StrictMode>
      <Wrapper>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route path="ReadingList" element={<ReadingList />} />
              <Route path="ReadingList22" element={<ReadingList22 />} />
              <Route path="ReadingList23" element={<ReadingList23 />} />
              {routesFromArticles}
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
      </Wrapper>
    </React.StrictMode>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

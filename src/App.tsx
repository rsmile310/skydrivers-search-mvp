import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SyntheticEvent, useState } from "react";

import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

function App() {
  const [skyType, setSkyType] = useState(0);
  const handleOnSkyTypeChange = (event: SyntheticEvent, newValue: number) => {
    setSkyType(newValue)
  }
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header skyType={skyType} onSkytypeChange={handleOnSkyTypeChange} />
        < div >
          <Routes>
            <Route path="/" element={<HomePage skyType={skyType} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router >
    </div >
  );
}

export default App;

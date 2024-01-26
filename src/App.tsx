import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

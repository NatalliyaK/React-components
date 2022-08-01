import React  from 'react';
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardsPage from './components/CardsPage';
import ErrorMassage from './components/ErrorMassage';
import About from './components/About';
import ReactForm from './components/ReactForm';


const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<CardsPage />} />
          <Route path="*" element={<ErrorMassage />} />
          <Route path="/form" element={<ReactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

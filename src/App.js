import Home from './pages/Home.js'
import AnalyticalBalance from './pages/AnalyticalBalancer.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<AnalyticalBalance/>} />
      </Routes>
    </>
  )
}

export default App;
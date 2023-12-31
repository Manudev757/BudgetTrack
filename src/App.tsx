import './App.css'
import { Budget } from './components/budget'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/BudgetTrack/"}>
      <Routes>
        <Route path="/" element={<Budget />} />
        <Route path="*" element={<Budget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

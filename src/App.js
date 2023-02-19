
import './App.css';
import Nav from './components/Nav';
import Password from './views/Password';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="password" element={<Password />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AddLogin from './components/AddLogin';
import AddSignup from './components/AddSignup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<AddLogin/>}/>
      <Route path='/signup'  element={<AddSignup/>}/>
      <Route path='/add'  element={<AddBus/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

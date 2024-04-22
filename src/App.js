import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { ContactUs } from './pages/contact-us';
import { NotFound } from './pages/not-found';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/contact-us'} element={<ContactUs/>}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

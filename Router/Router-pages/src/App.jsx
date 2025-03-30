
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import ShowData from './Components/ShowData';
import Update from './Components/Update';

function App() {
  return (
    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div >
        <BrowserRouter >
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/show' element={<ShowData/>} />
            <Route path='/update/:index' element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App

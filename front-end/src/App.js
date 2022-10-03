import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FractalPage from './pages/FractalPage'
import ColorsPage from './pages/ColorsPage'
import AfinnePage from './pages/AfinnePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage/>} />
        <Route path='*' element={<HomePage/>} />
        <Route path='/fractals' element={<FractalPage/>} />
        <Route path='/colors' element={<ColorsPage/>} />
        <Route path='/afinne' element={<AfinnePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

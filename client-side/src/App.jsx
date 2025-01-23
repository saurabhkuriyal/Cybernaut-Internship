import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import CreateUser from "./pages/CreateUser";
import Edit from './pages/Edit';
import Home from "./pages/Home";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>`
          <Route path='/createuser' element={<CreateUser />}></Route>
          <Route path='/user/:id' element={<Edit/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

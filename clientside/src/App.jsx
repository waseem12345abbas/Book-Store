import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateBooks from './components/CreateBooks';
import AllBooks from './components/AllBooks';
import SignUpForm from './components/SignUpForm';
import Profile from './components/Profile';
import Products from './components/Products';
import UpdateBook from './components/UpdateBook';
import './App.css'
import Navbar from './components/Navbar';


function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<CreateBooks/>}/>
      <Route exact path='/books' element={<AllBooks/>}/>
      <Route exact path='/signup' element={<SignUpForm/>}/>
      <Route exact path='/users' element={<Profile/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/updatebook/:bid' element={<UpdateBook/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

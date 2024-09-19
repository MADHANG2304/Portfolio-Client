import './assets/css/style.css'
import Profile from './components/Profile';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Landpage from './components/Landpage';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Landpage/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    
    </BrowserRouter>






    {/* <Startpage/> */}
        {/* <Signin formname = {"Sign In Form"}/>
        <Signup formname = {"Sign Up Form"}/>
        
          <Navbar name = {names}/> */}
    </>
  );
}

export default App;

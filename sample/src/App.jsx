import './assets/css/style.css'
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Landpage from './components/Landpage';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Education from './components/Education';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Landpage/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Education' element={<Education/>}></Route>
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

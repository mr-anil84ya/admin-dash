import './App.css';
import Sidenav from "./Sidenav";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Adduser from './pages/Adduser';
import Showuser from './pages/Showuser';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/adduser' exact element={<Adduser/>}/>
    <Route path='/showuser' exact element={<Showuser/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

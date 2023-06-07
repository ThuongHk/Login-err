import { Route, Routes } from "react-router-dom";
import LayoutDeafault from "./layout/LayoutDeafault";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='' element={<LayoutDeafault/>}>
        <Route exact path='' element={<Home/>}/>
        <Route exact path='contact' element={<Contact/>}/>
        <Route exact path='about' element={<About/>}/>        
      </Route>
      <Route exact path='login' element={<Login/>}>

      </Route>
    </Routes>
    </div>
  );
}

export default App;

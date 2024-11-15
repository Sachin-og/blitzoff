
import React from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Registration from './components/Registration';
import CampusEmbassador from './components/CampusEmbassador'
import Sponsers from './components/Sponsers'
import Merchandise from './components/Merchandise';
import Themes from './components/Themes';
import ComingSoon from './components/ComingSoon';
import Coming_soon from './components/Coming_soon';
import Coming from './components/Coming';
function App() {
  return (
    <>
      <Router>
       
        <Coming />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<AboutUs/>}></Route>
            <Route exact path="/events"element={<Events/>}></Route>
            <Route exact path="/registration" element={<Registration/>}></Route>
            <Route exact path="/campembass" element={<CampusEmbassador/>}></Route>
            <Route exact path="/sponsers" element={<Sponsers/>}></Route>
            <Route exact path="/merch" element={<Merchandise/>}></Route>

            
          </Routes> 
        </div>
       </Router> 
    </>
  )
}

export default App


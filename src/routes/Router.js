import React from "react"
import {
    BrowserRouter,
    Routes,
     Route,
     Link
  
  } from "react-router-dom";
import NavBar from "../components/navBar";
  import App from "../container/App";
  import NewContact from "../container/NewContact"

const Router =() => {
    return(
        <BrowserRouter>
            <NavBar />
           <Routes >
          
           <Route  exact path="/" element={<App />} />
           <Route  exact path="/New" element={<NewContact />} />

           </Routes>
            
            
       
        </BrowserRouter>
    )
   }
    
export default Router;
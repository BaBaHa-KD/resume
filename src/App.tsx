import './App.css'

import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import { SITE_NAME, NAV_LINKS } from "./config/site";
import Footer from './components/Footer';


function App() {
  

  return (
    <>
    <div className='d-flex flex-column min-vh-100'> 
      <NavigationBar brandName={SITE_NAME} links={NAV_LINKS} />

      <main className='flex-grow-1'>
      
        <Routes>
            {NAV_LINKS.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Routes>
    
      </main>
        <Footer /> 
    </div>
    </>
  )
}

export default App

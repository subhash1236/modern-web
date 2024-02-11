import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Outlet } from 'react-router-dom';


export default function App() {
  return (
    
   <>
   <Navbar/>
   <div className='min-vh-100 h-[85rem]'>
      <Outlet/>
    </div>
   
   <Footer/>
      
   </>
      
    
  )
}
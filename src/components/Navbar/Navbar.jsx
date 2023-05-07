import React from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
const Navbar = () => {
    return(
        <div className='n-wrapper'>
        <div className='n-left'>
             <div className='n-name'>HARISH</div>
             <Toggle/>
         </div><div className='n-rigth'>
                 <div className='n-list'>
                     <ul style={{listStyleType:"none"}}>
                         <li>Home</li>
                         <li>service</li>
                         <li>experiance</li>
                         <li>portfolio</li>
                         <li>testimonials</li>
                         <li><button className="button n-button">contact us</button></li>
                     </ul>
                 </div>
   
             </div>
     </div>
    );

    
};
export default Navbar;
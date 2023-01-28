import React, {useState, useEffect} from "react";
import "./Navbar.css"



export default function Navbar(){
return (
    <nav>
       <ul className="liste">
            <li className="items">Home |</li>
            <li className="items">About Us |</li>
            <li className="items">Services |</li>
            <li className="items">Contact Us | </li>
            <li className="items">Our Locations </li>

       </ul>  
       <button className="btn">BTN</button>
    </nav>
)
}
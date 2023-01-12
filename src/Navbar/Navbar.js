import React, {useState, useEffect} from "react";
import "./Navbar.css"



export default function Navbar(){
return (
    <nav>
       <ul className="liste">

            <li className="items">About us |</li>
            <li className="items">Home |</li>
            <li className="items">Services |</li>
            <li className="items">Contact us </li>

       </ul>  
       <button className="btn">BTN</button>
    </nav>
)
}
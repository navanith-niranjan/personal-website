import { useState, useEffect } from 'react';

import './PageIndicator.css';
import PageIndicator from './PageIndicator';

const Navbar = props => {

    const [activeNav, setactiveNav] = useState(["active","",""]);
    const [activepage, setactivepage] = useState(1);

    useEffect(()=>{
        if (props.isVisible[0] === "show") {
            setactiveNav(["active","",""]);
            setactivepage(1);
        } else if (props.isVisible[1] === "show") {
            setactiveNav(["","active",""]);
            setactivepage(2);
        } else if (props.isVisible[2] === "show") {
            setactiveNav(["","","active"]);
            setactivepage(3);
        }
    },[props.isVisible])


    return ( 
        <div className= "navigation">
            <nav className = "navbar">
                <ul className ="navbar-nav">
                    <li className ="nav-item"><a className={activeNav[0]} href="#Home" onClick={() => {setactiveNav(["active", "", ""]); setactivepage(1)}}>home</a></li>
                    <li className ="nav-item"><a className={activeNav[1]} href="#Projects" onClick={() => {setactiveNav(["", "active", ""]); setactivepage(2)}}>projects</a></li>
                    <li className ="nav-item"><a className={activeNav[2]} href="#Contact" onClick={() => {setactiveNav(["", "", "active"]); setactivepage(3)}}>contact</a></li>
                </ul>
            </nav>

            <PageIndicator pageNum = {activepage}/>

        </div>
    );
}
 
export default Navbar;
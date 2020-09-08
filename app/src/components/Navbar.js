import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">Commencez votre test</Link></li>
                <li><Link to="/account">Compte</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;

import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const history = useHistory();

    const handleAccount = () => {
        history.push('/account');
    }

    return (
        <header>
            <div className="title_audiowizard">
                <Link to="/"><img src={'http://localhost:3000/Audio_Wizard.png'} alt="logo home AudioWizard"/></Link>
            </div>

            <Button variant="dark" onClick={handleAccount}>Mon compte</Button>
        </header>
    )
}

export default Header;

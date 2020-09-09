import React, {useContext} from 'react';
import UserContext from '../../context/UserContext';

function Profil() {

    const { username } = useContext(UserContext);

    return (
        <div>
            <h2>
                Bienvenu.e {username}
            </h2>
        </div>
    )
}

export default Profil;

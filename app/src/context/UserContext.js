import React, { useState } from 'react';
const UserContext = React.createContext(undefined);

export const UserProvider = ({children}) => {

    const [username, setUsername] = useState('');

    const data = {
        username,
        setUsername,
    }

    return (
       <UserContext.Provider value={data} >
           {children}
       </UserContext.Provider>
    )
}

export default UserContext;

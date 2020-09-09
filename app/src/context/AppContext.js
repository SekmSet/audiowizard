import React, { useState } from 'react';

const AppContext = React.createContext(undefined);

export const AppProvider = ({ children }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstNamele] = useState('');
  const [gender, setGender] = useState('');

  const setFullName = ({ last_name, first_name }) => {
    setLastName(last_name);
    setFirstNamele(first_name);
  };

  const data = {
    lastName,
    firstName,
    gender,

    setGender,
    setFullName,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;

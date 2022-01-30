import React, { createContext, useState } from 'react';

export const AlertContext = createContext();
const AlertProvider = (props) => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <AlertContext.Provider
      value={{
        errorMsg,
        setErrorMsg
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

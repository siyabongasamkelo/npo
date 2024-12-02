import { createContext, useEffect, useState } from "react";
export const PayButtonContext = createContext();

export const PayButtonContextProvider = ({ children }) => {
  const [payButton, setPayButton] = useState([]);

  useEffect(() => {
    const retrievedPayButton = localStorage.getItem("payButton");
    const deserializedPayButton = JSON.parse(retrievedPayButton);

    if (deserializedPayButton !== null || deserializedPayButton !== undefined)
      setPayButton(deserializedPayButton);
    if (deserializedPayButton === null || deserializedPayButton === undefined)
      setPayButton([]);
  }, []);

  useEffect(() => {
    const serializedPayButton = JSON.stringify(payButton);
    localStorage.setItem("payButton", serializedPayButton);
  }, [payButton]);

  const addPayButton = (newpayButton) => {
    if (payButton === null || payButton === undefined) {
      setPayButton([]);
      return;
    }

    if (payButton !== null || payButton !== undefined)
      setPayButton(newpayButton);
  };

  const clearPayButton = () => {
    setPayButton([]);
  };

  return (
    <PayButtonContext.Provider
      value={{
        payButton,
        clearPayButton,
        addPayButton,
      }}
    >
      {children}
    </PayButtonContext.Provider>
  );
};

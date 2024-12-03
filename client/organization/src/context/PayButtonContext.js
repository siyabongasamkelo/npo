import { createContext, useEffect, useState } from "react";
export const PayButtonContext = createContext();

export const PayButtonContextProvider = ({ children }) => {
  const [payButton, setPayButton] = useState([]);

  useEffect(() => {
    const retrievedPayButton = localStorage.getItem("payButton");

    if (retrievedPayButton !== null || retrievedPayButton !== undefined)
      setPayButton(retrievedPayButton);
    if (retrievedPayButton === null || retrievedPayButton === undefined)
      setPayButton([]);
  }, []);

  useEffect(() => {
    const serializedPayButton = payButton;
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

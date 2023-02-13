import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = async (userInfo) => {
    setUserData(userInfo);

    await localStorage.setItem(
      "codeburguer:userData",
      JSON.stringify(userInfo)
    );
  };

  useEffect(() => {
    const loadUserDate = async () => {
      const clientInfo = await localStorage.getItem("codeburguer:userData");
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };
    loadUserDate();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }

  return context;
};
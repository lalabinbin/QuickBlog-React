import React, { useState, createContext } from "react";
import { login, getMe } from "@/services/api/user";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const loginUser = async (email, password) => {
    try {
      const res = await login({ email, password });
      if (res.status === 200) {
        setUserInfo(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));

        const meRes = await getMe();
        if (meRes.status === 200) {
          setUserInfo({ ...res.data, ...meRes.data.user });
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ ...res.data, ...meRes.data.user })
          );
        }
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ userInfo, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

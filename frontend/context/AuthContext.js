import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatchUser] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatchUser({ type: "LOGIN", payload: user });
      }
    }
  }, []);

  // console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

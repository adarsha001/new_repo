// import React, { useContext } from "react";

// const UserContext = React.createContext();

// export const UserContextProvider = ({ children }) => {
//   const storeTokenInLs = (serverToken) => {
//     return localStorage.setItem("token", serverToken);
//   };

//   return (
//     <UserContext.Provider value={{ storeTokenInLs }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useAuth = () => {
//     return useContext(UserContext)
// }

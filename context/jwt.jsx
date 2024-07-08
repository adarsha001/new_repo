import { createContext, useContext, useEffect, useState } from "react";
export const JwtContext = createContext();

export const JwtProvider = ({ children }) => {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  const [user,setuser]=useState("");
  const [isLoading, setIsLoading] = useState(true);
  const authorizationtoken=`Bearer ${Token}`;
  const storeToken = (servertoken) => {
    setToken(servertoken)
    return localStorage.setItem("token", servertoken);
  };

  let isloggedin=!!Token;
  const Logoutuser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


  const   userAuthentication = async () => {

    try {
      setIsLoading(true);
      const response =await fetch('https://shopsphere360.onrender.com/api/auth/user' ,{
        method:"GET",headers:{

          Authorization: authorizationtoken,
        },
      }) 
    if(response.ok){
      const data=await response.json();
console.log("user data",data.msg);
      setuser(data.msg);
      setIsLoading(false)

    }

    else{
      setIsLoading(false);
    }
    } catch (error) {
      
    }
  }
  useEffect(() => {
  userAuthentication();
  }, [])
  return (
    <JwtContext.Provider value={{storeToken,isLoading, Logoutuser,isloggedin,user,authorizationtoken}}>
      {children}
    </JwtContext.Provider>
  );
};

export const usejwt = () => {
  return useContext(JwtContext);
};

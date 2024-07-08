import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usejwt } from "../../context/jwt";
import { toast } from 'react-toastify';
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeToken } = usejwt();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://shopsphere360.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("Server response:", res_data);

      // Check for a successful response
      if (response.ok) {
        storeToken(res_data.token);
        setUser({
          email: "",

          password: "",
        });
        navigate("/ ");
        toast.success("login successfull")
      } else {
        // Handle different types of errors
       toast.error(res_data.extraDetails ?res_data.extraDetails :res_data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="registration-form .login-form  flex justify-center items-center h-screen">
        <div className="bg-white glass p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="main-heading mb-6 text-center text-4xl">Login Form</h1>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-lg font-medium">
                Email
              </label>
              <input
                type="text"
                className="glass px-4 py-2 rounded-lg border border-gray-300"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Email"required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-lg font-medium">
                Password
              </label>
              <input
                className="glass px-4 py-2 rounded-lg border border-gray-300"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Password"
                autoComplete="current-password"required
              />
            </div>

            <button
              type="submit"
              className="btn btn-submit py-2 px-4 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

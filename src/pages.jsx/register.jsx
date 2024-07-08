import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usejwt } from "../../context/jwt";import { toast } from 'react-toastify';
export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
    console.log(user);
    try {
      const response = await fetch("https://shopsphere360.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
     
      if (response.ok) {
      
        storeToken(res_data.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/");
      } else {
      toast.error(res_data.extraDetails ?res_data.extraDetails :res_data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="registration-form pt-32 flex justify-center items-center ">
        <div className=" p-8 rounded-lg shadow-md w-full max-w-md glass">
          <h1 className="main-heading mb-6 text-center text-2xl font-bold">
            Registration Form
          </h1>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 text-lg font-medium x">
                Username
              </label>
              <input
                type="text"
                className="glass px-4 py-2 rounded-lg border border-gray-300"
                name="username"
                value={user.username}
                onChange={handleInput}
                placeholder="Username" required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-lg font-medium">
                Email
              </label>
              <input
                type="text"
                className="glass px-4 py-2 rounded-lg border "
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Email"required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-lg font-medium">
                Phone
              </label>
              <input
                type="number"
                className="glass px-4 py-2 rounded-lg border border-gray-300"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Phone"required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                className="glass px-4 py-2 rounded-lg border border-gray-300"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Password"required
              />
            </div>
            <button
              type="submit"
              className="btn btn-submit py-2 px-4 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
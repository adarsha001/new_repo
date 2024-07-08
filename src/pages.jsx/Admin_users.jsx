import React, { useEffect, useState } from "react";
import { usejwt } from "../../context/jwt";

const Admin_users = () => {
  const [users, setUsers] = useState([]);
  const { authorizationtoken } = usejwt();

  const getAllUserData = async () => {
    try {
      const response = await fetch("https://shopsphere360.onrender.com/api/admin/users", {
        method: "GET",
        headers: { Authorization: authorizationtoken },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("users", data); // Log the actual data received

      // Ensure data is an array before setting state
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error("Data is not an array:", data);
        // Handle the error or set users to a default value/array
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle fetch errors
    }
  };
  const deleteuserbyid =async(id)=>{
    try {
      const response= await fetch(`https://shopsphere360.onrender.com/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: authorizationtoken },
      });
    const data=await response.json();
    console.log(`users after delete${data}`);
    if(response.ok){
      getAllUserData();
    }
    }catch(error){
console.log(error);
      }}
    
  useEffect(() => {
    getAllUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
<div className="overflow-x-auto">
  {/* Small and Medium Screens: Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
    {users.map((user, index) => (
      <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{user.username}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{user.email}</p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{user.phone}</p>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
            <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteuserbyid(user._id)}>Delete</button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Large Screens: Table Layout */}
  <div className="hidden md:block">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
              <button className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteuserbyid(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
};

export default Admin_users;

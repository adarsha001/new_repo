import { useState } from "react";
import { usejwt } from "../../context/jwt";
import { toast } from "react-toastify";
const Contact = () => {
  const {user}=usejwt();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
    instagram_id:""
  });

  const [userdata,setuserdata]=useState(true);
  if(userdata&&user){
    setContact({
      username:user.username,email:user.email,message:"", instagram_id:""
    })
    setuserdata(false);
  }

  // Handle input changes
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
  
  try {
    const response = await fetch("https://shopsphere360.onrender.com/api/form/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const res_data = await response.json();
    console.log("Server response:", res_data);

    if (response.ok) {
      setContact({ username: "",
        email: "",
        message: "", instagram_id:""})
toast.success("contact submitted successfully")

    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <section className="min-h-screen login-form flex flex-col justify-center items-center registration-form py-12">
        <div className="contact-content  container mb-8 text-center">
          <h1 className="main-heading text-4xl font-bold">Contact Us</h1>
        </div>
        <div className="container max-w-lg mx-auto">
          {/* Contact form content */}
          <section className="section-form glass bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="username" className="mb-2 text-lg font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                  className="p-3 border rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-lg font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                  className="p-3 border rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="instagram_id" className="mb-2 text-lg font-medium">instagram-id</label>
                <input
                  type="text"
                  name="instagram_id"
                  id="instagram_id"
                  autoComplete="off"
                  value={contact.instagram_id}
                  onChange={handleInput}
                  required
                  className="p-3 border rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-lg font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  className="p-3 border rounded-lg"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;

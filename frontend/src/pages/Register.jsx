// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [input, setInput] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("/auth/register", input);
//       console.log(res);

//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="auth">
//       <h1>Register</h1>
//       <form>
//         <input
//           required
//           type="text"
//           name="username"
//           placeholder="username"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="email"
//           name="email"
//           placeholder="email "
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="password"
//           name="password"
//           placeholder="password"
//           onChange={handleChange}
//         />
//         <button onSubmit={handleSubmit}>Register</button>
//         <p>This is an error!</p>
//         <span>
//           Do you have an acoount<Link to="/login">Login</Link>{" "}
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Register;



import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/register", input);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}> {/* Use onSubmit for the form */}
        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Register</button> {/* Use type="submit" for the button */}
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>{" "} {/* Use Link component for navigation */}
        </span>
      </form>
    </div>
  );
};

export default Register;


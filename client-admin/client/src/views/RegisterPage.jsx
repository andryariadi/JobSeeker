import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAsync } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, setRegister] = useState({ username: "", email: "", role: "", password: "", phoneNumber: "", addres: "" });

  const onChangeRegister = ({ target }) => {
    const { value, name } = target;
    setRegister({ ...register, [name]: value, role: "admin" });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(registerAsync(register))
      .then((data) => {
        console.log(data, "<<<<<diregisterrrrr");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          {/* {JSON.stringify(register)} */}
          <input onChange={onChangeRegister} name="username" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="User Name" />
          <input onChange={onChangeRegister} name="email" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email" />
          <input onChange={onChangeRegister} name="password" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          <input onChange={onChangeRegister} name="phoneNumber" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Phone Number" />
          <input onChange={onChangeRegister} name="addres" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Address" />

          <div className="text-center md:text-left">
            <button onClick={handleSubmitRegister} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
              Register
            </button>
          </div>
        </div>

        <div className="md:w-1/3 max-w-sm">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image" />
        </div>
      </section>
    </>
  );
}

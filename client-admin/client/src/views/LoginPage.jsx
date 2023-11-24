import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchJobAsyncSuccess, loginAsync } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });

  const onChangeLogin = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async () => {
    const { email, password } = login;
    await dispatch(loginAsync({ email, password, navigate }));
    navigate("/");
  };

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image" />
        </div>

        <div className="md:w-1/3 max-w-sm">
          <input onChange={onChangeLogin} name="email" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email" />
          <input onChange={onChangeLogin} name="password" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          <div className="text-center md:text-left">
            <button onClick={handleSubmit} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

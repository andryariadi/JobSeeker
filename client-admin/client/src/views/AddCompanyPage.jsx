import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCompany } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function AddCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyInput, setcompanyInput] = useState({
    name: "",
    companyLogo: "",
    location: "",
    email: "",
    description: "",
  });

  const onChangeCompany = ({ target }) => {
    const { value, name } = target;
    setcompanyInput({ ...companyInput, [name]: value });
  };

  const handlerSubmitCompany = (e) => {
    e.preventDefault();
    dispatch(createCompany(companyInput))
      .then((data) => {
        console.log(data, "<<<<<dicompanyyyyy");
        navigate("/company");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          {/* {JSON.stringify(companyInput)} */}
          <h1 className="text-2xl font-semibold font-serif bg-gray-600 text-slate-50 rounded-lg shadow-xl text-center">Create New Company</h1>
          <input onChange={onChangeCompany} value={companyInput.name} name="name" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Name Company" />
          <input onChange={onChangeCompany} value={companyInput.companyLogo} name="companyLogo" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Company Logo" />
          <input onChange={onChangeCompany} value={companyInput.location} name="location" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Location" />
          <input onChange={onChangeCompany} value={companyInput.email} name="email" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email" />
          <input onChange={onChangeCompany} value={companyInput.description} name="description" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Description" />

          <div className="text-center md:text-left">
            <button onClick={handlerSubmitCompany} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
              Add
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

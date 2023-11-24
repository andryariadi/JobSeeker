import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob, fetchCompanyAsyncSuccess } from "../store/actions/actionCreator";

export default function AddJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companies } = useSelector((state) => {
    return state.companies;
  });

  useEffect(() => {
    dispatch(fetchCompanyAsyncSuccess());
  }, []);

  const [jobInput, setJobInput] = useState({
    title: "",
    description: "",
    companyId: "",
    jobType: "",
  });

  const onChangeJob = ({ target }) => {
    const { value, name } = target;
    setJobInput({ ...jobInput, [name]: value });
  };

  const handlerSubmitJob = (e) => {
    e.preventDefault();
    dispatch(createJob(jobInput))
      .then((data) => {
        console.log(data, "<<<<<dicompanyyyyy");
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
          {/* {JSON.stringify(jobInput)} */}
          <h1 className="text-2xl font-semibold font-serif bg-gray-600 text-slate-50 rounded-lg shadow-xl text-center">Create New Job</h1>
          <input onChange={onChangeJob} value={jobInput.title} name="title" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Title" />
          <input onChange={onChangeJob} value={jobInput.description} name="description" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Description" />
          <select onChange={onChangeJob} value={jobInput.companyId} name="companyId" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4">
            <option value={""} disabled>
              --- Select Company ---
            </option>
            {companies.map((company) => (
              <option key={company.id} value={+company.id}>
                {company.name}
              </option>
            ))}
          </select>
          <input onChange={onChangeJob} value={jobInput.jobType} name="jobType" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Job Type" />

          <div className="text-center md:text-left">
            <button onClick={handlerSubmitJob} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
              Add
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

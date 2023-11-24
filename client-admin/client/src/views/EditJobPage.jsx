import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editJobAsync, fetchCompanyAsyncSuccess, fetchJobDetailAsync } from "../store/actions/actionCreator";
export default function EditJob() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { jobs } = useSelector((state) => {
    return state.jobDetail;
  });

  const { companies } = useSelector((state) => {
    return state.companies;
  });

  console.log(jobs, "<<<<<diedittttttt");
  console.log(companies, "<<<<<diedittttt");
  console.log(id, "<<<<<<IDDDDDDDD");

  const [forms, setForms] = useState({
    id: jobs.id,
    title: jobs.title,
    description: jobs.description,
    companyId: jobs.companyId,
    jobType: jobs.jobType,
  });

  useEffect(() => {
    dispatch(fetchJobDetailAsync(id));
    dispatch(fetchCompanyAsyncSuccess);
  }, [id]);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    setForms({ ...forms, [name]: value });
  };

  const handleSubmit = () => {
    const { title, description, companyId, jobType } = forms;

    const option = {};

    if (title) option.title = title;
    if (description) option.description = description;
    if (companyId) option.companyId = +companyId;
    if (jobType) option.jobType = jobType;

    if (Object.keys(option)) {
      dispatch(editJobAsync(option, id, navigate));
    }
  };

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          {/* {JSON.stringify(forms)} */}
          <h1 className="text-2xl font-semibold font-serif bg-gray-600 text-slate-50 rounded-lg shadow-xl text-center">Edit Job</h1>
          <input onChange={onChangeInput} value={forms.title} name="title" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Title" />
          <input onChange={onChangeInput} value={forms.description} name="description" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Description" />
          <select onChange={onChangeInput} value={forms.companyId} name="companyId" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4">
            <option value={forms.companyId} disabled>
              {jobs.Company?.name}
            </option>
            {companies.map((company) => (
              <option key={company.id} value={+company.id}>
                {company.name}
              </option>
            ))}
          </select>
          <input onChange={onChangeInput} value={forms.jobType} name="jobType" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Job Type" />

          <div className="text-center md:text-left">
            <button onClick={handleSubmit} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
              Add
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

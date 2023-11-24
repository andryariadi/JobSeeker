import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import TableJob from "../components/TableJob";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobAsyncSuccess } from "../store/actions/actionCreator";

function Home() {
  const dispatch = useDispatch();
  let { jobs, loading } = useSelector((state) => {
    return state.jobs;
  });

  useEffect(() => {
    dispatch(fetchJobAsyncSuccess());
  }, []);

  if (loading) {
    return <h1>Loading Bossssss</h1>;
  }

  // if (jobs.id) {
  //   jobs = [];
  // }

  return (
    <>
      {/* Table */}
      <div className="grid grid-cols-12">
        <div className="col-span-2">{/* <Sidebar /> */}</div>

        <div className="col-span-10 px-14 py-8">
          <div className="flex justify-between mb-2">
            <div>
              <h2 className="font-bold text-start text-3xl">
                <FontAwesomeIcon icon={faBriefcase} className="mx-5 text-[28px]" />
                Job List
              </h2>
            </div>
            <div>
              <Link to={"/add-job"}>
                <h2 className="font-bold">
                  <FontAwesomeIcon icon={faCirclePlus} className="mx-2 text-[20px]" />
                  Create Job
                </h2>
              </Link>
            </div>
          </div>

          <div>
            <table className="w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    No
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    Name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    Job Type
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    Company
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    Description
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    Created By
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    Company Logo
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-15 py-4 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(jobs) ? (
                  jobs.map((job) => {
                    return <TableJob key={job.id} jobData={job} />;
                  })
                ) : (
                  <tr>
                    <td colSpan="8">No jobs available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End Table */}
      <Outlet />
    </>
  );
}

export default Home;

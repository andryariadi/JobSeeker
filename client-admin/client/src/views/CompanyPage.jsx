import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import TableCompany from "../components/TableCompany";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyAsyncSuccess } from "../store/actions/actionCreator";

function Company() {
  const dispatch = useDispatch();
  const { companies, loading } = useSelector((state) => {
    return state.companies;
  });

  useEffect(() => {
    dispatch(fetchCompanyAsyncSuccess());
  }, []);

  if (loading) {
    return <h1>Loading Bossssss</h1>;
  }

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
                Company List
              </h2>
            </div>
            <div>
              <Link to={"/add-company"}>
                <h2 className="font-bold">
                  <FontAwesomeIcon icon={faCirclePlus} className="mx-2 text-[20px]" />
                  Create Company
                </h2>
              </Link>
            </div>
          </div>

          <div>
            <table className="w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-10 py-4 text-center">
                    No
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-10 py-4 text-center">
                    Name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-10 py-4 text-center">
                    Company Logo
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-10 py-4 text-center">
                    Location
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-10 py-4 text-center">
                    Email
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-10 py-4 text-center">
                    Description
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-10 py-4 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => {
                  return <TableCompany key={company.id} companyData={company} />;
                })}
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

export default Company;

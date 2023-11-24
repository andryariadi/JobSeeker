import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteCompany } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";

export default function TableCompany({ companyData }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(companyData.id);
    dispatch(deleteCompany(companyData.id));
  };

  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 w-full">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{companyData.id}</td>
        <td className="text-sm text-center text-gray-900 font-light px-2 py-4 whitespace-nowrap">{companyData.name}</td>
        <td className="text-sm text-center text-center text-gray-900 font-light px-10 py-4 whitespace-nowrap">
          <img className="object-center" src={companyData.companyLogo} />
        </td>
        <td className="text-sm text-center text-gray-900 font-light px-2 py-4 whitespace-nowrap">{companyData.location}</td>
        <td className="text-sm text-center text-gray-900 font-light px-2 py-4 whitespace-nowrap">{companyData.email}</td>
        <td className="text-sm text-center text-gray-900 font-light px-2 py-4 whitespace-wrap">{companyData.description}</td>
        <td className="text-sm text-center text-gray-900 font-light px-2 py-4 whitespace-nowrap">
          <FontAwesomeIcon onClick={handleDelete} icon={faTrash} style={{ color: "#b60707" }} className="mx-3 cursor-pointer" />
        </td>
      </tr>
    </>
  );
}

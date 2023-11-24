import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteJob } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function TableJob({ jobData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(jobData.id);
    dispatch(deleteJob(jobData.id));
  };

  const editHandler = () => {
    navigate(`jobs/${jobData.id}`);
  };
  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 w-full">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{jobData.id}</td>
        <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">{jobData.title}</td>
        <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">{jobData.jobType}</td>
        <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">{jobData.name}</td>
        <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-wrap">{jobData.description}</td>
        <td className="text-sm text-gray-900 font-light px-10 py-4 whitespace-nowrap">{jobData.User.username}</td>
        <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-wrap">
          <img className="object-center" src={jobData.Company.companyLogo} />
        </td>
        <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
          <FontAwesomeIcon onClick={handleDelete} icon={faTrash} style={{ color: "#b60707" }} className="mx-3 cursor-pointer" />
          <FontAwesomeIcon onClick={editHandler} icon={faPenToSquare} style={{ color: "#185bcd" }} className="cursor-pointer" />
        </td>
      </tr>
    </>
  );
}

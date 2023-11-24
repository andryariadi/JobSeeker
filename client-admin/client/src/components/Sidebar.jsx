import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faCircleXmark, faMagnifyingGlass, faHouse, faBuilding, faUserPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      {/* Sidebar */}
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 overflow-y-auto text-center font-[Poppins] bg-gray-700">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <FontAwesomeIcon icon={faGhost} className="px-2 py-1 bg-blue-600 rounded-md" />
            <h1 className="font-bold text-gray-200 text-[20px] ml-3">JobSeeker</h1>
            <FontAwesomeIcon icon={faCircleXmark} className="ml-20 cursor-pointer lg:hidden" />
          </div>
          <hr className="my-2 text-gray-500" />
        </div>

        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-600 text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm" />
          <input type="text" placeholder="Search" className="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHouse} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
          </Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to={"company"}>
            <FontAwesomeIcon icon={faBuilding} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Company</span>
          </Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to={"register"}>
            <FontAwesomeIcon icon={faUserPlus} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Register Admin</span>
          </Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <Link to={"/login"}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Sing Out</span>
          </Link>
          {/* <Link
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Sing Out</span>
          </Link> */}
        </div>
      </div>
      {/* End Sidebar */}
    </>
  );
}

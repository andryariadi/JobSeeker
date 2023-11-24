import { useDispatch, useSelector } from "react-redux";
import Hiring from "../assets/hiring.jpg";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchJobDetailAsync } from "../store/actions/actionCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBuilding, faClock, faEnvelopeCircleCheck, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function DetailJob() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { jobs, loading } = useSelector((state) => {
    return state.jobDetail;
  });

  console.log(jobs, "<<<<<didtelaissss");
  console.log(id, "<<<<<<IDDDDDDDD");

  useEffect(() => {
    dispatch(fetchJobDetailAsync(id));
  }, [id]);

  if (loading) {
    return <h1>Loading Bossssss</h1>;
  }

  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img className="img-fluid rounded mb-4 mb-lg-0" src={Hiring} />
          </div>

          <div className="col-lg-5">
            <h1 className="font-weight-light">{jobs.title}</h1>
            <div>
              <h4>Job Description</h4>
              <p className="font-weight-light">{jobs.description}.</p>
            </div>
            {/* <div className="mb-3">
              <h4>Job Reqruitment</h4>
              <div>
                <div className="d-inline">
                  <p className="d-inline ms-2 fw-semibold font-weight-light">{jobs.Skills[0]?.name}</p>
                </div>
                <div className="d-inline ms-3">
                  <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#e1735c" }} />
                  <p className="d-inline ms-2 fw-semibold font-weight-light">{jobs.Skills[0]?.level}</p>
                </div>
              </div>
            </div> */}
            <div>
              <FontAwesomeIcon icon={faBuilding} style={{ color: "#2347d7" }} />
              <p className="d-inline ms-2 fw-semibold">{jobs.Company?.name}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} style={{ color: "#13d844" }} />
              <p className="d-inline ms-2 fw-semibold">{jobs.jobType}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#dcc009" }} />
              <p className="d-inline ms-2 fw-semibold">{jobs.Company?.location}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{ color: "#ff735c" }} />
              <p className="d-inline ms-2 fw-semibold">{jobs.Company?.email}</p>
            </div>
            <div className="mt-3">
              <Button variant="outline-warning" className="fw-semibold">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

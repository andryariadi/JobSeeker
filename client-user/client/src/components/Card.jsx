import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBuilding, faClock } from "@fortawesome/free-solid-svg-icons";

export default function BaseCard({ jobData }) {
  return (
    <>
      <div className="col-md-4 mb-5">
        <Card>
          <Card.Img variant="top" src={jobData.Company.companyLogo} />
          <Card.Body>
            <Card.Title>{jobData.title}</Card.Title>
            <Card.Text className="d-inline ms-2">
              <FontAwesomeIcon icon={faBuilding} style={{ color: "#2347d7" }} />
              <p className="d-inline ms-2">{jobData.Company.name}</p>
            </Card.Text>
            <Card.Text className="d-inline ms-2">
              <FontAwesomeIcon icon={faClock} style={{ color: "#13d844" }} />
              <p className="d-inline ms-2">{jobData.jobType}</p>
            </Card.Text>
            <div className="d-block mt-3 mb-3">
              <Card.Text className="d-inline ms-2">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#dcc009" }} />
                <p className="d-inline ms-2">{jobData.Company.location}</p>
              </Card.Text>
            </div>

            <Link to={`jobs/${jobData.id}`}>
              <Button variant="outline-warning">Detail Job</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

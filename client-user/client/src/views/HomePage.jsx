import BaseCard from "../components/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobAsyncSuccess } from "../store/actions/actionCreator";

export default function Home() {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => {
    return state.jobs;
  });

  useEffect(() => {
    dispatch(fetchJobAsyncSuccess());
  }, []);

  if (loading) {
    return <h1>Loading Bossssss</h1>;
  }

  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img className="img-fluid rounded mb-4 mb-lg-0" src="https://tinyurl.com/3ebrjjvd" />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Raih Pekerjaan Untuk Karir Bermakna</h1>
            <p>Menghubungkan anda dengan Peluang Karier impian Anda. Menjadikan pencarian pekerjaan lebih Mudah, Cepat, dan Efisien. Pelayanan terpercaya untuk memandu anda menuju Kesuksesan Karier</p>
            <a className="btn btn-primary" href="#!">
              Call to Action!
            </a>
          </div>
        </div>

        <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">Bersama Kami, Anda Tidak Hanya Mencari Pekerjaan, Tetapi Membangun Karier!</p>
          </div>
        </div>

        <div className="row gx-4 gx-lg-5">
          {jobs.map((job) => {
            return <BaseCard key={job.id} jobData={job} />;
          })}
        </div>
      </div>
    </>
  );
}

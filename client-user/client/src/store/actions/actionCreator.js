import { Navigate } from "react-router-dom";
import { JOB_FETCH_SUCCESS, JOB_FETCH_LOADING, JOB_FETCH_FAILED, JOBDETAIL_FETCH_SUCCESS, JOBDETAIL_FETCH_LOADING, JOBDETAIL_FETCH_FAILED, COMPANY_FETCH_SUCCESS, COMPANY_FETCH_LOADING, COMPANY_FETCH_FAILED } from "./actionType";
// const baseUrl = "http://localhost:3000";
const baseUrl = "https://job-seeker.ariadiandry.tech";

export const fetchJobSuccess = (data) => {
  return {
    type: JOB_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchJobLoading = () => {
  return {
    type: JOB_FETCH_LOADING,
  };
};

export const fetchJobFailed = (data) => {
  return {
    type: JOB_FETCH_FAILED,
    payload: data,
  };
};

export const fetchJobDetailSuccess = (data) => {
  return {
    type: JOBDETAIL_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchJobDetailLoading = () => {
  return {
    type: JOBDETAIL_FETCH_LOADING,
  };
};

export const fetchJobDetailFailed = (data) => {
  return {
    type: JOBDETAIL_FETCH_FAILED,
    payload: data,
  };
};

export const fetchCompanySuccess = (data) => {
  return {
    type: COMPANY_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchCompanyLoading = () => {
  return {
    type: COMPANY_FETCH_LOADING,
  };
};

export const fetchCompanyFailed = (data) => {
  return {
    type: COMPANY_FETCH_FAILED,
    payload: data,
  };
};

export const fetchJobAsyncSuccess = () => {
  return (dispatch) => {
    dispatch(fetchJobLoading());
    fetch(`${baseUrl}/jobs`, {
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const action = fetchJobSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        dispatch(fetchJobFailed(err));
      });
  };
};

export const fetchCompanyAsyncSuccess = () => {
  return (dispatch) => {
    dispatch(fetchCompanyLoading());
    fetch(`${baseUrl}/companies`, {
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const action = fetchCompanySuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        dispatch(fetchCompanyFailed(err));
      });
  };
};

export const loginAsync = ({ email, password }) => {
  return (dispatch) => {
    fetch(`${baseUrl}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.access_token) {
          console.log(data.message);
        } else {
          localStorage.access_token = data.access_token;
          dispatch(fetchJobAsyncSuccess());
          Navigate("/");
        }
      })
      .catch((err) => fetchJobFailed(err));
  };
};

export const registerAsync = ({ username, email, password, phoneNumber, addres }) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, phoneNumber, addres }),
      });
      if (!response.ok) {
        throw { message: "Something went wrong!" };
      }
      const data = await response.json();
      return data;
    } catch (err) {
      fetchJobFailed(err);
      console.log(err);
      throw err;
    }
  };
};

export const createJob = ({ title, description, companyId, jobType }) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify({ title, description, companyId, jobType }),
      });
      if (!response.ok) {
        throw { message: "Something went wrong!" };
      }
      const data = await response.json();
      return data;
    } catch (err) {
      fetchJobFailed(err);
      console.log(err);
      throw err;
    }
  };
};

export const createCompany = ({ name, companyLogo, location, email, description }) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/companies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify({ name, companyLogo, location, email, description }),
      });
      if (!response.ok) {
        throw { message: "Something went wrong!" };
      }
      const data = await response.json();
      return data;
    } catch (err) {
      fetchCompanyFailed(err);
      console.log(err);
      throw err;
    }
  };
};

export const deleteJob = (id) => {
  return (dispatch) => {
    fetch(`${baseUrl}/jobs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then(() => {
        dispatch(fetchJobAsyncSuccess());
      })
      .catch((err) => fetchJobFailed(err));
  };
};

export const deleteCompany = (id) => {
  return (dispatch) => {
    fetch(`${baseUrl}/companies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then(() => {
        dispatch(fetchCompanyAsyncSuccess());
      })
      .catch((err) => fetchCompanyFailed(err));
  };
};

export const fetchJobDetailAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchJobDetailLoading());
    fetch(`${baseUrl}/jobs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "<<<<<<detail diactionnn");
        const action = fetchJobDetailSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchJobDetailFailed(err));
      });
  };
};

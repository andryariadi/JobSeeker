import { JOB_FETCH_SUCCESS, JOB_FETCH_LOADING, JOB_FETCH_FAILED } from "../actions/actionType";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

console.log(initialState.jobs, "<<<<<<diluarrrr");
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case JOB_FETCH_LOADING:
      console.log(state.jobs, "<<<<<<<didalammmm");
      return {
        ...state,
        loading: true,
      };
    case JOB_FETCH_SUCCESS:
      console.log(state.jobs, "<<<<<<<didalammmm");
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case JOB_FETCH_FAILED:
      console.log(state.jobs, "<<<<<<<didalammmm");
      return {
        ...state,
        jobs: action.payload,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

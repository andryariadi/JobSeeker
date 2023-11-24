import { JOBDETAIL_FETCH_SUCCESS, JOBDETAIL_FETCH_LOADING, JOBDETAIL_FETCH_FAILED } from "../actions/actionType";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

console.log(initialState.jobs, "<<<<<<diluarrrr");
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case JOBDETAIL_FETCH_LOADING:
      console.log(state.jobs, "<<<<<<<didalammmm");
      return {
        ...state,
        loading: true,
      };
    case JOBDETAIL_FETCH_SUCCESS:
      console.log(state.jobs, "<<<<<<<didalammmm");
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case JOBDETAIL_FETCH_FAILED:
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

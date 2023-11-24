import { COMPANY_FETCH_FAILED, COMPANY_FETCH_LOADING, COMPANY_FETCH_SUCCESS } from "../actions/actionType";

const initialState = {
  companies: [],
};

console.log(initialState.companies, "<<<<<<diluarrrr");
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case COMPANY_FETCH_LOADING:
      console.log(state.companies, "<<<<<<<didalammmm");
      return {
        ...state,
        loading: true,
      };
    case COMPANY_FETCH_SUCCESS:
      console.log(state.companies, "<<<<<<<didalammmm");
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };
    case COMPANY_FETCH_FAILED:
      console.log(state.companies, "<<<<<<<didalammmm");
      return {
        ...state,
        companies: action.payload,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

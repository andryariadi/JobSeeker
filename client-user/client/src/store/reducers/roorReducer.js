import { combineReducers } from "redux";
import jobReducer from "./jobReducer";
import companyReducer from "./companyReducer";
import jobDetailReducer from "./jobDetailReducer";

const rootReducer = combineReducers({
  jobs: jobReducer,
  companies: companyReducer,
  jobDetail: jobDetailReducer,
});

export default rootReducer;

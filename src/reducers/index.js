import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import { dummyajax } from "../components/DummyFolder/redux/dummyfolder";
// //import allcompetents from './competencyReducer';
// import users from "./usermanagementReducer";
// import searchs from "./userSearch";
// import competencies from "./competencyReducer";
// import * as types from "../actions/type";
// import competencyInfo from "./competencyInfoReducer";
// import ajaxCall from "./ajaxReducer";
// import profileInfo from "./profileInfoReducer";
// //import profiles from './profilesReducer';

const rootReducer = combineReducers({
  dummyajax
  //   auth,
  //   users,
  //   form: formReducer,
});

export default rootReducer;

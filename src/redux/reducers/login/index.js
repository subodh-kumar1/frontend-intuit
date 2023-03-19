import APP_CONSTANTS from "../../../constants/appConstants";
import { loginActionType } from "../../actions/login";
import initialState from "../initialState";

function loginReducer(state = initialState.userDetails, action = {}) {
  switch (action.type) {
    case loginActionType.LOGIN_CUSTOMER_SUCCESS:
      return {
        ...state,
        userId: action.response.id,
        userName: action.response.name,
        type: APP_CONSTANTS.USER_TYPE.CUSTOMER,
        error: null,
      };
    case loginActionType.LOGIN_EXPERT_SUCCESS:
      return {
        ...state,
        userId: action.response.id,
        userName: action.response.name,
        type: APP_CONSTANTS.USER_TYPE.EXPERT,
        error: null,
      };
    case loginActionType.LOGIN_FAILURE:
      return {
        ...state,
        userId: 0,
        userName: "",
        type: APP_CONSTANTS.USER_TYPE.NONE,
        error: APP_CONSTANTS.ERROR.LOGIN_FAILURE,
      };
    default:
      return state;
  }
}
export default loginReducer;

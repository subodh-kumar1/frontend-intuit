import { loginActionType } from ".";

function loginCustomer(id) {
  return { type: loginActionType.LOGIN_CUSTOMER, id };
}

function loginExpert(id) {
  return { type: loginActionType.LOGIN_EXPERT, id };
}

function loginCustomerSuccess(response) {
  return { type: loginActionType.LOGIN_CUSTOMER_SUCCESS, response };
}

function loginExpertSuccess(response) {
  return { type: loginActionType.LOGIN_EXPERT_SUCCESS, response };
}

function loginFailure() {
  return { type: loginActionType.LOGIN_CUSTOMER_FAILURE };
}

export default {
  loginCustomer,
  loginExpert,
  loginCustomerSuccess,
  loginExpertSuccess,
  loginFailure,
};

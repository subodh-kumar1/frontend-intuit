import { call, put, takeLatest } from "redux-saga/effects";
import { loginService } from "../../../services";
import { loginAction, loginActionType } from "../../actions/login";

/*
try {
    yield put(commonAction.showLoader());
    const isASPM = yield select(selectIsASPM);
    const getCOFAPI = isASPM ? fmecaService.listASPMCOF : fmecaService.listCOF;
    const responseData = yield call(getCOFAPI, payload);
    yield put(causeOfFailureAction.getCOFListSuccess(responseData));
    const notificationPayload = {
      lastAction: causeOfFailureActionType.GET_COF_LIST_SUCCESS,
      messageCode: ''
    };
    yield put(appStateAction.showSuccessNotification(notificationPayload));
  } catch (error) {
    yield put(causeOfFailureAction.getCOFListFailure(error));
    const notificationPayload = {
      lastAction: causeOfFailureActionType.GET_COF_LIST_FAILURE,
      messageCode: error?.response?.data?.error?.errorCode,
      message: error?.response?.data?.error?.message
    };
    yield put(appStateAction.showErrorNotification(notificationPayload));
  } finally {
    yield put(commonAction.hideLoader());
    yield put(appStateAction.clearAppState());
  }
*/
export function* loginCustomer(payload) {
  try {
    const { id } = payload;
    const responseData = yield call(loginService.loginCustomer, { id });
    const customer = responseData?.data;

    yield put(loginAction.loginCustomerSuccess(customer));
  } catch {
    yield put(loginAction.loginFailure());
  } finally {
    console.log("Log In Process Over...");
  }
}

export function* watchLoginCustomer() {
  yield takeLatest(loginActionType.LOGIN_CUSTOMER, loginCustomer);
}

export function* loginExpert(payload) {
  try {
    const { id } = payload;
    const responseData = yield call(loginService.loginExpert, { id });
    const expert = responseData?.data;

    yield put(loginAction.loginExpertSuccess(expert));
  } catch {
    yield put(loginAction.loginFailure());
  } finally {
    console.log("Log In Process Over...");
  }
}

export function* watchLoginExpert() {
  yield takeLatest(loginActionType.LOGIN_EXPERT, loginExpert);
}

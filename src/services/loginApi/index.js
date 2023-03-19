import APP_CONSTANTS from "../../constants/appConstants";
import { httpService } from "..";

class LoginService {
  loginCustomer(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/customer/login`;
    return httpService.post(url, requestData);
  }
  loginExpert(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/login`;
    return httpService.post(url, requestData);
  }
}

export default new LoginService();

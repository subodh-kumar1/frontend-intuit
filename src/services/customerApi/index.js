import APP_CONSTANTS from "../../constants/appConstants";
import { httpService } from "..";

class CustomerService {
  createCustomer(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/customer/create`;
    return httpService.post(url, requestData);
  }
  createTask(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/customer/task/create`;
    return httpService.post(url, requestData);
  }
  viewTaskList(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/customer/tasks`;
    return httpService.post(url, requestData);
  }
  viewTaskDetails(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/customer/task-details`;
    return httpService.post(url, requestData);
  }
}

export default new CustomerService();

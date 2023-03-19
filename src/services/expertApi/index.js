import APP_CONSTANTS from "../../constants/appConstants";
import { httpService } from "..";

class ExpertService {
  createExpert(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/create`;
    return httpService.post(url, requestData);
  }
  createTask(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/task/create`;
    return httpService.post(url, requestData);
  }
  viewAllTask() {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/tasks`;
    return httpService.get(url);
  }
  resolveTask(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/resolve`;
    return httpService.put(url, requestData);
  }
  viewQueuedTask() {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/tasks/queued`;
    return httpService.get(url);
  }
  viewImportantTask() {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/tasks/important-tasks`;
    return httpService.get(url);
  }
  viewTaskList(requestData) {
    const url = `${APP_CONSTANTS.BASE_URL}/expert/assigned-tasks`;
    return httpService.post(url, requestData);
  }
}

export default new ExpertService();

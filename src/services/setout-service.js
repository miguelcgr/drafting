import axios from "axios";
require("dotenv").config();
class SetoutsService {
  constructor() {
    this.designApi = axios.create({
      baseURL: `http://localhost:5000`,
    });
  }

  getSetouts() {
    return this.designApi.get("/setouts").then((response) => response.data);
  }
}

const setoutsService = new SetoutsService();

export default setoutsService;

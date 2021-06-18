import axios from "axios";

class DesignService {
  constructor() {
    this.designApi = axios.create({
      baseURL: `http://localhost:5000`,
    });
  }

  getDesigns() {
    return this.designApi.get("/designs").then((response) => response.data);
  }
}

const designService = new DesignService();

export default designService;

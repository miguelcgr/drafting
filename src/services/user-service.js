import axios from "axios";

class UsersService {
  constructor() {
    this.usersApi = axios.create({
      baseURL: `http://localhost:5000`,
    });
  }

  getUsers() {
    return this.usersApi.get(`/users`).then((response) => response.data);
  }
}

const usersService = new UsersService();

export default usersService;

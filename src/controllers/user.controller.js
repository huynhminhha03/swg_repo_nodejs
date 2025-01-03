const UserService = require("../services/user.service");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }

  async getUser(req, res) {
    try {
      const user = await UserService.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }

  async createUser(req, res) {
    const user = await UserService.createUser(req.body);
    if (!user) {
      res.status(400).json({ message: "User not created" });
    }
    res.json(user);
  }

  async updateUser(req, res) {
    const user = await UserService.updateUser(req.params.id, req.body);
    if (!user) {
      res.status(400).json({ message: "User not updated" });
    }
    res.json(user);
  }

  async deleteUser(req, res) {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) {
      res.status(400).json({ message: "User not deleted" });
    }
    res.json(user);
  }
}

module.exports = new UserController();

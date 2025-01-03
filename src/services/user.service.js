const User = require("../models/user.model");

class UserService {
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUser(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(user) {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(id, user) {
    try {
      const updatedUser = await User.update(user, { where: { id } });
      return updatedUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id) {
    try {
      return await User.destroy({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new UserService();

const User = require('../models/User');

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
  async store(req, res) {
    const user = req.body;

    const response = await User.create(user);

    return res.json(response)
  }
}

module.exports = new UserController();
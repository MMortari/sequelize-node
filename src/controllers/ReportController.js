const { Op } = require('sequelize');
const User = require('./../models/User');

class ReportController {

  async show(req, res) {
    const users = await User.findAll({
      attributes: [ 'name', 'email' ],
      where: {
        email: {
          [Op.like]: '%@email.com'
        }
      }
    })

    return res.json(users);
  }

}

module.exports = new ReportController();
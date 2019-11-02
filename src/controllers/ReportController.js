const { Op } = require('sequelize');
const User = require('./../models/User');

class ReportController {

  async show(req, res) {
    const users = await User.findAll({
      attributes: [ 'name', 'email' ],
      where: {
        email: {
          [Op.like]: '%@gmail.com'
        }
      },
      include: [
        {
          association: 'addresses',
          where: { street: 'rua miguel arco e flexa' }
        },
        {
          association: 'techs',
          required: false,
          where: { name: { [Op.like]: 'React%' } }
        },
      ]
    })

    return res.json(users);
  }

}

module.exports = new ReportController();
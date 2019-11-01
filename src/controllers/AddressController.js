const Address = require('./../models/Address');
const User = require('./../models/User');

class AddressController {
  async index(req, res) {
    const addresses = await Address.findAll();

    return res.json(addresses);
  }
  async indexOne(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'addresses'
      }
    });

    return res.json(user);
  }
  async store(req, res) {
    const address = req.body;
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }
      
    const response = await Address.create({ ...address, user_id });

    return res.json(response);
  }
}

module.exports = new AddressController();
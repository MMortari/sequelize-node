const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

/**
 * List all users
 * @route GET /users
 * @group Users - Operations about user
 * @returns {Array.<User>} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
routes.get('/users', UserController.index);

// * @param {string} name.body.required - user's name.
// * @param {string} email.body.required - user's email - eg: user@domain
/**
 * Create user
 * @route POST /users
 * @group Users - Operations about user
 * @param {User} body.body.required - aksdad
 * @returns {User} 201 - Created
 * @returns {Error}  default - Unexpected error
 * @security JWT [admin]
 */
routes.post('/users', UserController.store);

/**
 * List all addresses
 * @route GET /address
 * @group Address - Operations about user's address
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
routes.get('/address', AddressController.index);
/**
 * List user with addresses
 * @route GET /users/{user_id}/address
 * @group Address - Operations about user's address
 * @param {string} user_id.path.required - user's name.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
routes.get('/users/:user_id/address', AddressController.indexOne);
/**
 * Create address by user
 * @route POST /users/{user_id}/address
 * @group Address - Operations about user's address
 * @param {string} user_id.path.required - user's name.
 * @param {string} zipcode.required - user's zipcode.
 * @param {string} street.required - user's street.
 * @param {number} number.required - user's number.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
routes.post('/users/:user_id/address', AddressController.store);

routes.get('/users/:user_id/techs', TechController.indexOne);
routes.post('/users/:user_id/techs', TechController.store);
/**
 * Delete Tech
 * @route DELETE /users/:user_id/techs
 * @group Tech - Operations about user's techs
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
routes.delete('/users/:user_id/techs', TechController.delete);

module.exports = routes;
/**
 * Users.js
 *
 * @description :: The model for our user. We are keeping it simple; so we have only an email and password.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true
    },
    email: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string'
    }
  }
};


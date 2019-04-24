const httpStatus = require("http-status");
const userService = require("./users.service");
const Role = require("../../enums/roles.enum");

module.exports.get = (req, res, next) => {
  userService
    .getAllUsers()
    .then(users => {
      res.status(httpStatus.OK).json(users);
    })
    .catch(err => next(err));
};

module.exports.block = (req, res, next) => {
  userService
    .block(req.body, req.params.id)
    .then(() => {
      res.status(httpStatus.OK).json(`${req.params.id} is Blocked`);
    })
    .catch(err => next(err));
};

module.exports.editProfile = (req, res, next) => {
  userService
    .editProfile(req.user._id, req.body)
    .then(() => {
      res.status(httpStatus.OK).json(`${req.body.username} edited profile`);
    })
    .catch(err => next(err));
};

module.exports.deleteUser = (req, res, next) => {
  userService
    .deleteUser(req.user.id)
    .then(() => {
      res.status(httpStatus.OK).json(`${req.user.username} deleted profile`);
    })
    .catch(err => next(err));
};

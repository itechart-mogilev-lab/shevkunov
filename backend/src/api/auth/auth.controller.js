const httpStatus = require("http-status");
const authService = require("./auth.service");
const Role = require("../../enums/roles.enum");

module.exports.login = (req, res, next) => {
  authService
    .authenticate(req.body)
    .then(user => {
      user
        ? res.json(user)
        : res
            .status(httpStatus.UNAUTHORIZED)
            .json({ message: "Username or password is incorrect" });
    })
    .catch(err => next(err));
};

module.exports.logout = (req, res, next) => {
  userService.logout(req.body).then(() => {
    res.status(httpStatus.OK).json("Ok");
  });
};

module.exports.registerUser = (req, res, next) => {
  authService
    .registerUser(req.body, Role.User, req.headers.host)
    .then(result => {
      console.log(result);
      result
        ? res.status(httpStatus.CREATED).json(result)
        : res.status(httpStatus.BAD_REQUEST).json({ message: "BAD REQUEST" });
    })
    .catch(err => next(err));
};

module.exports.confirmationUser = (req, res, next) => {
  authService
    .confirmationUser(req.body, req.get("Authorization"))
    .then(() => {
      res.status(httpStatus.OK).json("Verified");
    })
    .catch(err => next(err));
};

module.exports.registerCompany = (req, res, next) => {
  authService
    .registerCompany(req.body, Role.Company)
    .then(() => {
      res.status(httpStatus.CREATED).json("Created");
    })
    .catch(err => next(err));
};

module.exports.authGoogle = (req, res) => {
  res.status(httpStatus.PERMANENT_REDIRECT).json("Redirected");
};

module.exports.authSocial = (req, res, next) => {
  authService
    .authSocial(req.user)
    .then(tokens => res.status(httpStatus.OK).json(tokens))
    .catch(err => next(err));
};

module.exports.getCurrentUser = (req, res) => {
  res.json(req.user);
};

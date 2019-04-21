const jwt = require("jsonwebtoken");
const config = require("../../config/environment");
const User = require("../../models/user.model");
const Role = require("../../enums/roles.enum");
const mailService = require("../../services/mail.service");
const { mailForBlocked, mailForUnblocked } = require("../../config/mail");
const userStatus = require("../../enums/users.status.enum");

async function getAllUsers() {
  const users = await User.find({ role: Role.User });
  return users;
}

async function block({ reason, blocked }, _id) {
  if (blocked) {
    const user = await User.findByIdAndUpdate(_id, {
      $set: { status: userStatus.Blocked, block_comment: `${reason}` }
    });
    User.findById(_id, function(err, user) {
      mailService.gmailSend(user.email, mailForBlocked(user.username, reason));
    });
  } else {
    const user = await User.findByIdAndUpdate(_id, {
      $set: { status: userStatus.Verified }
    });
    User.findById(_id, function(err, user) {
      mailService.gmailSend(user.email, mailForUnblocked(user.username));
    });
  }
  return true;
}

async function editProfile(_id, { firstname, surname, email, phoneNumber }) {
  return await User.findByIdAndUpdate(_id, {
    $set: {
      firstname: firstname,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber
    }
  });
}

async function deleteUser(_id) {
  return await User.findByIdAndUpdate(_id, {
    $set: { status: userStatus.Deleted }
  });
}

module.exports = {
  getAllUsers,
  block,
  editProfile,
  deleteUser
};

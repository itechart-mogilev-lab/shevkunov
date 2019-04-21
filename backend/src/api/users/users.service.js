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

async function editProfile(
  _id,
  { firstname, surname, email, phoneNumber, oldPassword, newPassword }
) {
  try {
    let user;
    if (!oldPassword || oldPassword === "") {
      user = await User.findByIdAndUpdate(_id, {
        $set: {
          firstname: firstname,
          surname: surname,
          email: email,
          phoneNumber: phoneNumber
        }
      });
    } else {
      user = await User.findById(_id)
        .select("password")
        .exec();
      const success = await user.comparePassword(oldPassword);
      if (success === false) throw new Error("Old password is incorrect");
      if (newPassword === oldPassword) throw new Error("Passwords are equal");
      user.password = newPassword;
      await user.save(err => {
        if (err) throw err;
      });
    }
  } catch (err) {
    throw err;
  }
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

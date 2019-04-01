const jwt = require("jsonwebtoken");
const config = require("../../config/environment");
const User = require("../../models/user.model");
const Role = require("../../enums/roles.enum");
const mailService = require("../../services/mail.service");
const {mailForBlocked, mailForUnblocked} = require("../../config/mail");
const userStatus = require("../../enums/users.status.enum");

var NodeGeocoder = require('node-geocoder');

async function getAllUsers(){
  const users = await User.find({ role: Role.User });
  return users;
}

async function block({ reason, blocked }, _id) {
  if(blocked){
    const user = await User.findByIdAndUpdate(_id, {$set: {status: userStatus.Blocked, block_comment: `${reason}`}});
    User.findById(_id, function (err, user) {
      mailService.gmailSend(user.email, mailForBlocked(user.username, reason));
    });
  } else {
    const user = await User.findByIdAndUpdate(_id, { $set: { status: userStatus.Verified }});
    User.findById(_id, function (err, user) {
      mailService.gmailSend(user.email, mailForUnblocked(user.username));
    }); 
  }
  return true;
}

async function editProfile(_id, { data }){
  return await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        "username": data.username,
        "email": data.email,
        "phoneNumber": data.phoneNumber
      }
    }
  );
};

async function deleteUser(_id){
  return await User.findByIdAndUpdate(_id, {$set: {status: userStatus.Deleted}});
}

async function test(){
  var options = {
    provider: 'yandex',
   
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyArNP_9i9f6dY0j0wY0_AiomQLxqNPxY5U', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  };
   
  var geocoder = NodeGeocoder(options);
   
  // Using callback
  geocoder.geocode("Беларусь Могилев улица Островского дом 44")
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });
  return true;
}

module.exports = {
  getAllUsers,
  block,
  editProfile,
  deleteUser,
  test
};
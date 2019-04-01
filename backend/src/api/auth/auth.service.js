const jwt = require("jsonwebtoken");
const config = require("../../config/environment");
const User = require("../../models/user.model");
const Company = require("../../models/company.model");
const usersStatus = require("../../enums/users.status.enum");
const mailService = require("../../services/mail.service");
const { mailForVerify } = require("../../config/mail");

async function authenticate({ email, password }) {
  try {
    let data = await User.findOne({ email })
      .select("+password")
      .exec();
    if (data === null) {
      data = await Company.findOne({ email })
        .select("+password")
        .exec();
    }

    if (data === null) throw new Error("User or company not found");

    let success = await data.comparePassword(password);
    if (success === false) throw new Error("Password is incorrect");
    if (data.status !== usersStatus.Verified)
      throw new Error("User or company is not verified");
    const dataObj = data.toObject();

    const token = jwt.sign(
      { id: dataObj._id, role: dataObj.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiration }
    );

    const { password: userPassword, ...userWithoutPassword } = dataObj;

    return {
      ...userWithoutPassword,
      token
    };
  } catch (err) {
    throw err;
  }
}

async function logout({ token }) {
  return true;
}

async function registerUser(
  { firstname, secondname, surname, username, email, password, phoneNumber },
  role,
  host
) {
  const user = new User({
    firstname,
    secondname,
    surname,
    username,
    email,
    password,
    phoneNumber,
    status: usersStatus.NotVerified,
    role
  });
  user.save();
  const userObj = user.toObject();
  const verifyToken = jwt.sign(
    { id: userObj._id, role: userObj.role },
    config.jwt.secret,
    { expiresIn: "1h" }
  );
  mailService.gmailSend(
    userObj.email,
    mailForVerify(userObj.username, verifyToken, host)
  );
  return true;
}

async function confirmationUser(verifyToken) {
  const decodeToken = jwt.verify(verifyToken, config.jwt.secret);
  const _id = decodeToken.id;
  const user = await User.findByIdAndUpdate(_id, {
    $set: { status: usersStatus.Verified }
  });
  return true;
}

async function authSocial(data) {
  console.log(data);
  const token = jwt.sign({ id: data._id, role: data.role }, config.jwt.secret, {
    expiresIn: config.jwt.expiration
  });
  return true;
}

async function registerCompany(
  {
    logo,
    companyName,
    discription,
    address,
    typesOfServices,
    price,
    email,
    password,
    phoneNumber
  },
  role
) {
  const company = new Company({
    logo,
    companyName,
    discription,
    address,
    typesOfServices,
    price,
    email,
    password,
    phoneNumber,
    role
  });
  return company.save().then(({ _id }) => Company.findById(_id));
}

module.exports = {
  authenticate,
  logout,
  registerUser,
  registerCompany,
  confirmationUser,
  authSocial
};

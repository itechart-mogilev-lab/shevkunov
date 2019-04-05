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
  { firstname, secondname, surname, email, password, phoneNumber },
  role,
  host
) {
  try {
    const rndCode = getRandomInt(1000, 9999);
    const user = new User({
      firstname,
      secondname,
      surname,
      email,
      password,
      phoneNumber,
      status: usersStatus.NotVerified,
      verifyCode: rndCode,
      numberOfTryies: 0,
      role
    });
    await user.save();
    const userObj = user.toObject();
    const verifyToken = jwt.sign(
      { id: userObj._id, role: userObj.role },
      config.jwt.secret,
      { expiresIn: "1h" }
    );
    mailService.gmailSend(
      userObj.email,
      mailForVerify(userObj.firstname, rndCode, verifyToken, host)
    );
    const { password: userPassword, ...userWithoutPassword } = userObj;

    return {
      ...userWithoutPassword,
      verifyToken
    };
  } catch (err) {
    throw err;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function confirmationUser({ confirmationCode }, verifyToken) {
  const decodeToken = jwt.verify(verifyToken, config.jwt.secret);
  const _id = decodeToken.id;
  const user = await User.findById(_id);
  const userObj = user.toObject();
  if (userObj.verifyCode !== confirmationCode) {
    if (userObj.numberOfTryies !== 5) {
      user.numberOfTryies = userObj.numberOfTryies + 1;
      await user.save();
    } else {
      User.findByIdAndDelete(_id).exec();
      throw new Error(
        "Number of tries is over! You must reregister your account"
      );
    }
    console.log(typeof confirmationCode);
    throw new Error("Verify code incorrect");
  } else {
    user.status = usersStatus.Verified;
    await user.save();
  }
  return true;
}

async function authSocial(data) {
  console.log(data);
  const token = jwt.sign({ id: data._id, role: data.role }, config.jwt.secret, {
    expiresIn: config.jwt.expiration
  });
  return token;
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

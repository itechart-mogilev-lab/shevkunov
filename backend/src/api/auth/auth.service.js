const jwt = require("jsonwebtoken");
const config = require("../../config/environment");
const User = require("../../models/user.model");
const Company = require("../../models/company.model");
const usersStatus = require("../../enums/users.status.enum");
const mailService = require("../../services/mail.service");
const { middlePriceForCompany } = require("../../services/price.service");
const { mailForVerify } = require("../../config/mail");

async function authenticate({ email, password }) {
  try {
    let data;
    data = await User.findOne({ email })
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
  let data;
  let schema;
  data = await User.findById(_id);
  schema = User;
  if (data === null) {
    data = await Company.findById(_id);
    schema = Company;
  }
  if (data === null) throw new Error("User or company not found");
  let newNumberOfTryies = 0;
  const userObj = data.toObject();
  if (userObj.verifyCode !== confirmationCode) {
    if (userObj.numberOfTryies !== 5) {
      newNumberOfTryies = userObj.numberOfTryies + 1;
      await schema.updateOne(
        { _id: _id },
        { $set: { numberOfTryies: newNumberOfTryies } }
      );
    } else {
      schema.findByIdAndDelete(_id).exec();
      throw new Error(
        "Number of tries is over! You must reregister your account"
      );
    }
    throw new Error("Verify code incorrect");
  } else {
    await schema.updateOne(
      { _id: _id },
      { $set: { status: usersStatus.Verified } }
    );
  }
  return true;
}

async function authSocial(data) {
  const token = jwt.sign({ id: data._id, role: data.role }, config.jwt.secret, {
    expiresIn: config.jwt.expiration
  });
  return token;
}

async function registerCompany(
  { name, description, address, email, password, services, rooms },
  role,
  host
) {
  try {
    const price = middlePriceForCompany(rooms, services);
    const rndCode = getRandomInt(1000, 9999);
    const company = new Company({
      name,
      description,
      address,
      email,
      password,
      role,
      services,
      price,
      rooms,
      verifyCode: rndCode,
      numberOfTryies: 0
    });
    await company.save();
    const companyObj = company.toObject();
    const verifyToken = jwt.sign(
      { id: companyObj._id, role: companyObj.role },
      config.jwt.secret,
      { expiresIn: "1h" }
    );
    mailService.gmailSend(
      companyObj.email,
      mailForVerify(companyObj.firstname, rndCode, verifyToken, host)
    );
    const { password: userPassword, ...userWithoutPassword } = companyObj;

    return {
      ...userWithoutPassword,
      verifyToken
    };
  } catch (err) {
    throw err;
  }
}

module.exports = {
  authenticate,
  logout,
  registerUser,
  registerCompany,
  confirmationUser,
  authSocial
};

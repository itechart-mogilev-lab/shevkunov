const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { passwordReg, phoneReg } = require("../api/users/users.validations");
const userStatuses = require("../enums/users.status.enum");

const schema = new mongoose.Schema(
  {
    firstname: { type: String, lowercase: true },
    surname: { type: String, lowercase: true },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required!"],
      trim: true,
      lowercase: true,
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: "{VALUE} is not a valid email!"
      }
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator(password) {
          return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
        },
        message: "{VALUE} is not a valid password!"
      }
    },
    phoneNumber: {
      type: String,
      trim: true,
      unique: true,
      required: false,
      validate: {
        validator(phoneNumber) {
          return phoneReg.test(phoneNumber);
        },
        message: "{VALUE} is not a valid phone number!"
      }
    },
    address: {
      fullAddress: { type: String },
      coordinates: {
        coordinateX: { type: Number },
        coordinateY: { type: Number }
      }
    },
    status: { type: String, default: userStatuses.NotVerified },
    block_comment: { type: String },
    role: { type: String, required: true, lowercase: true },
    googleId: { type: String, unique: true },
    verifyCode: { type: String },
    numberOfTryies: { type: Number }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

schema.pre("save", function(next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    next();
  });
});

schema.pre("update", function(next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    next();
  });
});

schema.post("save", function(error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("User already exist"));
  } else {
    next(error);
  }
});

schema.methods.comparePassword = function(candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, success) => {
      if (err) {
        return reject(err);
      }
      return resolve(success);
    });
  });
};

schema.set("toObject", {
  transform: function(doc, ret) {
    delete ret.__v;
  }
});

module.exports = mongoose.model("User", schema);

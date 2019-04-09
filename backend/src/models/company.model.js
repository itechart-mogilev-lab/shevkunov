const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { passwordReg, phoneReg } = "../api/users/users.validations";
require("mongoose-double")(mongoose);
const userStatuses = require("../enums/users.status.enum");
const SchemaTypes = mongoose.Schema.Types;
var mongoosePaginate = require("mongoose-paginate");

const schema = new mongoose.Schema(
  {
    // logoUrl: {type: String, required: true, get: v => `${root}${v}`},
    name: {
      type: String,
      required: true,
      unique: true,
      validate: nameValidator
    },
    description: {
      type: String,
      required: true,
      minlength: 50,
      maxlength: 1000
    },
    address: {
      country: { type: String, require: true },
      city: { type: String, require: true },
      other: { type: String, require: true }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: "{VALUE} is not a valid email!"
      }
    },
    rooms: {
      toilet: {
        price: { type: SchemaTypes.Double, required: true, default: 0 },
        time: { type: Number, required: true, default: 0 }
      },
      standart: {
        price: { type: SchemaTypes.Double, required: true, default: 0 },
        time: { type: Number, required: true, default: 0 }
      },
      big: {
        price: { type: SchemaTypes.Double, required: true, default: 0 },
        time: { type: Number, required: true, default: 0 }
      }
    },
    services: [
      {
        name: { type: String, required: true },
        coefficient: { type: SchemaTypes.Double, required: true }
      }
    ],
    workPlan: [
      {
        day: { type: String, require: true },
        workHours: {
          start: { type: String, require: true },
          end: { type: String, require: true }
        },
        lunchHours: {
          start: { type: String, require: true },
          end: { type: String, require: true }
        }
      }
    ],
    price: { type: SchemaTypes.Double, required: true },
    role: { type: String, required: true, lowercase: true },
    status: { type: Number, required: true, default: userStatuses.NotVerified },
    ratting: { type: SchemaTypes.Double, default: 0 },
    password: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator(password) {
          return passwordReg.test(password);
        },
        message: "{VALUE} is not a valid password!"
      }
    },
    block_comment: { type: String },
    verifyCode: { type: String },
    numberOfTryies: { type: Number }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

schema.index({
  name: "text",
  "address.country": "text",
  "services.name": "text"
});

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
      if (err) return reject(err);
      return resolve(success);
    });
  });
};

schema.set("toObject", {
  transform: function(doc, ret) {
    delete ret.__v;
  }
});

module.exports = mongoose.model("Company", schema);

const dotenv = require("dotenv");
const joi = require("joi");

const schema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid("development", "test", "production")
      .default("development"),
    APP_PORT: joi.number().default(3001),
    JWT_ENCRYPTION: joi
      .string()
      .default("e5a3388c-9731-4043-8b11-be602d8c8919"),
    JWT_EXPIRATION: joi.number().default(10000),
    MONGODB_HOST: joi.string().default("mongodb://127.0.0.1:27017/nodejs-example"),
    GMAIL_SERVICE_NAME: joi.string().default("gmail"),
    GMAIL_SERVICE_HOST: joi.string().default("smtp.gmail.com"),
    GMAIL_SERVICE_SECURE: joi.boolean().default(false),
    GMAIL_SERVICE_PORT: joi.number().default(587),
    GMAIL_USER_NAME: joi.string().default("cleaningcompany.mog@gmail.com"),
    GMAIL_USER_PASSWORD: joi.string().default("cleaning_mog1945#best"),
    CLIENT_ID: joi.string().default("338653706264-1qf6h8q287dc81s9kgclnn0hji9dt3hs.apps.googleusercontent.com"),
    CLIENT_SECRET: joi.string().default("5JHfRINgaBrQShkdyaaS5_UJ")
  })
  .unknown()
  .required();

dotenv.config();

const { error, value: envVars } = joi.validate(process.env, schema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  app: {
    environment: envVars.NODE_ENV,
    port: envVars.APP_PORT
  },
  jwt: {
    secret: envVars.JWT_ENCRYPTION,
    expiration: envVars.JWT_EXPIRATION
  },
  mongodb: {
    host: envVars.MONGODB_HOST
  },
  gmailService: {
    name: envVars.GMAIL_SERVICE_NAME,
    host: envVars.GMAIL_SERVICE_HOST,
    secure: envVars.GMAIL_SERVICE_SECURE,
    port: envVars.GMAIL_SERVICE_PORT
  },
  gmailUser: {
    username: envVars.GMAIL_USER_NAME,
    password: envVars.GMAIL_USER_PASSWORD
  },
  googleAuth: {
    clientId: envVars.CLIENT_ID,
    clientSecret: envVars.CLIENT_SECRET
  }
};

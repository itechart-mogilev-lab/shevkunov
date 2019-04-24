const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const config = require("./environment");
const User = require("../models/user.model");
const Company = require("../models/company.model");
const usersStatus = require("../enums/users.status.enum");
const Roles = require("../enums/roles.enum");

function jwtStrategy() {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret
  };

  const strategy = new Strategy(opts, async (token, done) => {
    let user;
    if (token.role === Roles.User) {
      user = await User.findById(token.id);
    } else {
      user = await Company.findById(token.id);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });

  passport.use(strategy);
}

function googleStrategy() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.googleAuth.clientId,
        clientSecret: config.googleAuth.clientSecret,
        callbackURL: "/api/auth/google/redirect",
        passReqToCallback: true
      },
      (req, accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(user => {
          if (user) {
            return done(null, user);
          } else {
            new User({
              firstname: profile.displayName,
              email: profile.emails[0].value,
              status: usersStatus.Verified,
              role: Roles.User,
              googleId: profile.id
            })
              .save()
              .then(user => {
                done(null, user);
              });
          }
        });
      }
    )
  );
}

module.exports = {
  initialize: () => passport.initialize(),
  authenticate: () => passport.authenticate("jwt", { session: false }),
  authGoogle: () =>
    passport.authenticate("google", {
      session: false,
      scope: ["profile", "email"],
      state: "myState"
    }),
  jwtStrategy,
  googleStrategy
};

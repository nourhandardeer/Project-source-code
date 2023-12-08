const jwt = require('express-jwt');
const secret = process.env.secret;

function authJwt() {
  return jwt({
    secret: secret,
    algorithms: ['HS256'],
    isRevoked: (req, payload, done) => {
      if (!payload.isAdmin) {
        done(null, true); // Revoking access if user is not an admin
      } else {
        done(); // Allowing access for admin users
      }
    }
  }).unless({
    path: [
      // Define your allowed paths here
      /\/public\/uploads(.*)/,
      /\/products(.*)/,
      /\/categories(.*)/,
      /\/orders(.*)/,
      '/users/login',
      '/users/register'
    ]
  });
}

module.exports = authJwt;

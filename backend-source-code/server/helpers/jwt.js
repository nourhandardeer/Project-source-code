<<<<<<< Updated upstream
/* const expressJwt = require('express-jwt');
=======
const jwt = require('jsonwebtoken');
>>>>>>> Stashed changes

function authJwt() {
    const secret = process.env.secret;

    return (req, res, next) => {
        // Get the token from the request header
        const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - No token provided' });
        }

        // Verify the token
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized - Invalid token' });
            }

            // Check if the user is an admin
            const { isAdmin } = decoded;

            // If the user is an admin, allow access to admin-related routes
            if (isAdmin) {
                // Example: Check if the request path is related to admin functionalities
                if (req.path.startsWith('/admin')) {
                    // Allow access to admin routes
                    return next();
                }
                
                // If it's not an admin-related route, deny access
                return res.status(403).json({ message: 'Forbidden - Admin access required' });
            }

            // If the user is not an admin, deny access to admin-related routes
            return res.status(403).json({ message: 'Forbidden - Admin access required' });
        });
    };
}

<<<<<<< Updated upstream
async function isRevoked(req, payload, done) {
    if(!payload.isAdmin) {
        done(null, true)
    }

    done();
}



module.exports = authJwt

 */
=======
module.exports = authJwt;

>>>>>>> Stashed changes


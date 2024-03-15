// authorization
// this route is give access only for  director and admin
const authorize = (access) => {
  return (req, res, next) => {
    const userRole = req.params.role;
    if (access.includes(userRole)) {
      next();
    } else {
      return res.status(402).send("Sorry your are not authorized!");
    }
  };
};

module.exports = authorize;

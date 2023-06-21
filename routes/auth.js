const User = require('../models/user');

// module.exports = function ({ app }) {
  const login = async (req, res) => {
    const { email, password } = req.body;
    
    if (email && password) {
      try {
        const user = await User.findOne({ email, password });
        
        if (user) {
          res.status(200).send({ ...user._doc });
        } else {
          res.status(200).send({ message: "Your username or password is not correct" });
        }
      } catch (error) {
        res.status(500).send({ message: "Internal server error" });
      }
    } else {
      res.status(200).send({ message: "Your username or password is not correct" });
    }
  };
// };

module.exports = {login}
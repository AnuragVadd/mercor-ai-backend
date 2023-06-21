const User = require('../models/user');

const signUp =async  (req, res) => {

    const { id, email, password, fullname, avatar } = req.body;
    if (id && email && password && fullname && avatar) {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          res.status(200).send({ message: 'The email already exists in the system' });
        } else {
          const user = new User({ id, email, password, fullname, avatar });
          const insertedUser = await user.save();
          res.status(200).send({ id, email, fullname, avatar });
        }
      } catch (error) {
        res.status(500).send({ message: 'Cannot create your account, please try again' });
      }
    } else {
      res.status(200).send({ message: "Please input required fields" });
    }
  }

  module.exports = {signUp}
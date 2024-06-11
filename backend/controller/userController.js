const User = require('../model/user');

exports.signup = async (req, res, next) => {
  try {
    console.log(req.body)
    const { name, email, password, role } = req.body;
    const existingUser = await User.find({ email });
    console.log('existingUser' , existingUser)

const user = await User.create(req.body)
    res.status(201).json({
        user
    })

  } catch (error) {
   res.status(400).json({
    error : error.message
   })
  }
};

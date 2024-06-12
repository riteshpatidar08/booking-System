const User = require('../model/user');
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken')

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

exports.login = async(req,res,next) => {
  try {
     const {email , password} = req.body 
     const user = await User.find({email}) ;
console.log(user)
console.log(user[0].password)
//check if user exist
     if(!user){
        const error = new Error('user is not registered , Please login');
        error.statusCode = 400;
        throw error
     }

     const MatchPassword = await bcrypt.compare(password, user[0].password) ;
console.log(MatchPassword)
     if(!MatchPassword){
       const error = new Error('Password did not matched');
        error.statusCode = 400;
        throw error
     }

     //send the token to the frontend
     const token = jwt.sign({id:user._id , role : user.role}, 'this-is-my-secret' , {expiresIn : '30d'})
    console.log(token)
   res.status(200).json({
      message : 'success' ,
      token
   })

  } catch (error) {
    next(error)
  }
}

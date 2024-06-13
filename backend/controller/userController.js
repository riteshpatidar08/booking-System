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
   next(error)
  }
};

exports.login = async(req,res,next) => {
  try {
     const {email , password} = req.body 
     const user = await User.find({email}) ;

//check if user exist
     if(!user){
        const error = new Error('user is not registered , Please login');
        error.statusCode = 400;
        throw error
     }

     const MatchPassword = await bcrypt.compare(password, user[0].password) ;

     if(!MatchPassword){
       const error = new Error('Password did not matched');
        error.statusCode = 400;
        throw error
     }
   console.log(user[0]._id , user[0].role)

     //send the token to the frontend
     const token = jwt.sign({id : user[0]._id ,role : user[0].role}, 'this-is-my-secret' , {expiresIn : '30d'})
    
   res.status(200).json({
      message : 'success' ,
      token
   })

  } catch (error) {
    next(error)
  }
}


exports.getUsers = async(req,res,next)=>{
  try {
    const users = await User.find({ role: { $ne: 'admin' } })
   

   if(!users){
       const error = new Error('Users not found');
       error.statusCode = 404 ;
       throw error
   }
   res.status(200).json({
       length : users.length ,
       message : 'success' ,
       users
   })
  } catch (error) {
     next(error)
  }
}
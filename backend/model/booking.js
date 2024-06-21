const mongoose = require('mongoose') ;

const bookingSchema = new mongoose.Schema({
     userId  : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'User'
     },
     name : {
        type : String
     },
     date : {
        type : String
     },
     time : {
        type : String
     }

})

const Booking = mongoose.model('Boooking' , bookingSchema)




module.exports = Booking ;
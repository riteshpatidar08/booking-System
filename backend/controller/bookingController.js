const Booking = require('../model/booking');

exports.createBooking = async (req, res, next) => {
  try {
    const { name, date, time } = req.body;

    const booking = await Booking.create({
      userId: req.user.id,
      name,
      date,
      time,
    });
    if (!booking) {
      const error = new Error('failed to create booking');
      error.statusCode = 400;
      throw error;
    }
    res.status(201).json({
      message: 'success',
      booking,
    });
  } catch (error) {
    next(error);
  }
};

exports.getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.find().populate('userId');

    res.status(200).json({
      booking,
    });
  } catch (error) {
    next(error);
  }
};

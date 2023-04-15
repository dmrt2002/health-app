const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  fname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  patients: {
    type: Array
  },
  appointments: {
    type: Array
  },
  city: {
    type: String
  },
  address: {
    type: String
  },
  lname: {
    type: String
  },
  specialist: {
    type: String
  },
  title: {
    type: String
  },
  gender: {
    type: String
  },
});
userSchema.statics.findByCredentials = async (email, password) => {
    console.log(email,password)
  const user = await Doctor.findOne({ email })
  if (user === null) {
    return user;
  }
  if(password === user.password) {
    return user;
  }
};

const Doctor = mongoose.model("doctors", userSchema, "doctors");
module.exports = Doctor
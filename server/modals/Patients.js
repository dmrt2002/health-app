const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  state: {
    type: String
  },
  appointments: {
    type: Array
  },
  messages: {
    type: Array
  },
  done: {
    type: Array
  }
});
//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await Patients.findOne({ email })
  if (user === null) {
    return user;
  }
  if(password === user.password) {
    return user;
  }
};

const Patients = mongoose.model("Patients", userSchema, "patients");
module.exports = Patients
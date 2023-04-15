const Doctor = require("../modals/Doctor");
const Patients = require("../modals/Patients");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const doctors = require("../doctors")

exports.registerUser = async (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var state = req.body.state;
  Patients.create(
      {
        name: name,
        email: email,
        password: password,
        state: state
      },
      async function (err, user) {
        if (err) {
          res.status(400).json(err);
        } else {
          let token = jwt.sign({ user }, "secret");
          console.log(user)
          res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
            httpOnly: false,
            secure: true,
            path: "/",
            maxAge: 3600
          }))
          res.status(200).json({ token });
        }
      }
    );
};

exports.registerDoctor = async (req, res) => {
  for(let i = 0 ; i < doctors.length; i++) {
    var fname = doctors[i].FirstName;
    var lname = doctors[i].LastName;
    var gender = doctors[i].Gender;
    var title = doctors[i].Title
    var address = doctors[i].Address1
    var city = doctors[i].City;
    var state = doctors[i].State;
    var specialty = doctors[i].SubSpecialist;
    var email = "doctor@gmail.com";
    var password = "doctor@me";
    Doctor.create(
      {
        fname: fname,
        city: city,
        email:email,
        password: password,
        state:state,
        address: address,
        lname: lname,
        specialist: specialty,
        title: title,
        gender: gender,
        patients: [],
        appointments: []
      },
      async function (err, user) {
        if (err) {
          res.status(400).json(err);
        } else {
          console.log(user)
        }
      }
    );
  }
};

exports.userLogin = async (req, res) => {
  try {
    const email = req.body.uemail;
    const password = req.body.upassword;
    const admin = await Patients.findByCredentials(email, password);
    if (admin === null) {
      return res.status(401).json("Invalid Credentials");
    }
    let token = jwt.sign({ admin }, "secret");
    console.log(cookie);
    res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
      httpOnly: false,
      maxAge: 3600,
      secure: true,
      path: "/"
    }))
    res.status(200).json({ admin });
  } catch (err) {
    res.status(400).json("Incorrect Password");
  }
};

exports.doctorLogin = async (req, res) => {
  try {
    const email = req.body.femail;
    const password = req.body.fpassword;
    const admin = await Doctor.findByCredentials(email, password);
    if (admin === null) {
      return res.status(401).json("Invalid Credentials");
    }
    let token = jwt.sign({ admin }, "secret");
    res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
      httpOnly: false,
      secure: true,
      path: "/",
      maxAge: 3600
    }))
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json("Incorrect Password");
  }
};

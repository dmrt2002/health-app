const Doctor = require("../modals/Doctor");
const User = require("../modals/User");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

exports.registerUser = async (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
    User.create(
      {
        name: name,
        email: email,
        password: password,
      },
      async function (err, user) {
        if (err) {
          res.status(400).json(err);
        } else {
          let token = jwt.sign({ user }, "secret");
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

exports.userLogin = async (req, res) => {
  try {
    const email = req.body.uemail;
    const password = req.body.upassword;
    const admin = await User.findByCredentials(email, password);
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

const Doctor = require("../modals/Doctor");
const Patients = require("../modals/Patients");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const medicines = require("../medicines.js")
const diseases = require("../diseases.js")

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
    res.status(200).json({ admin });
  } catch (err) {
    res.status(400).json("Incorrect Password");
  }
};

exports.getDoctors = async (req, res) => {
  let doctors = await Doctor.find();
  const results = doctors.filter(obj => {
    return obj.city === req.body.city;
  });
  res.status(200).json(results);
}

exports.getMedicines = async (req, res) => {
  let results = medicines.results.filter(obj => {
    return obj.openfda.generic_name !== undefined && obj.openfda.brand_name !== undefined
    && obj.openfda.manufacturer_name !== undefined && obj.openfda.pharm_class_pe !== undefined
  })
  res.status(200).json(results.slice(0,30));
}

exports.getDiseases = async (req, res) => {
const key = 'Disease';
const unique = [...new Map(diseases.map(item =>
  [item[key], item])).values()];

  let results = unique.filter((obj) => {
    return obj.Symptom_1 !== null && obj.Symptom_2 !== null && obj.Symptom_3 !== null && obj.Symptom_4 !== null
  });
  res.status(200).json(results.slice(4,34))
}

exports.getAppointment = async (req,res) => {
  let doctor = await Doctor.find({_id: req.body.doctorid});
  try {
  let updated = await Patients.findOneAndUpdate({
    _id: req.body.token,
  } , {
    $push: {
      appointments: {
        fullname: doctor[0].fname,
        age: req.body.age,
        sex: req.body.sex,
        phone: req.body.phone,
        email: req.body.email,
        date: req.body.date,
        status: "pending"
      }
    },
  });
  console.log(updated)
}
catch(e) {
  console.log(e)
}
  await Doctor.findOneAndUpdate({
    _id: req.body.doctorid,
  } , {
    $push: {
      appointments: {
        fullname: req.body.fullname,
        age: req.body.age,
        sex: req.body.sex,
        phone: req.body.phone,
        email: req.body.email,
        date: req.body.date,
        status: "pending"
      }
    },
  });
  res.status(200).json("successful")
}

exports.getAllAppointments = async (req, res) => {
  let doctor = await Doctor.find({_id: req.body.id});
  res.status(200).json(doctor[0]);
}

exports.updateStatus = async (req, res) => {
  let patient = await Patients.findOne({email: req.body.email});
  let doctor = await Doctor.findOne({_id: req.body.id})
  await Patients.findOneAndUpdate({
    email: req.body.email,
  } , {
    $push: {
      done: {
        id: doctor._id,
        status: req.body.status
      }
    },
  });
  await Doctor.findOneAndUpdate({
    _id: req.body.id,
  } , {
    $push: {
      done: {
        id: patient._id,
        status: req.body.status
      }
    },
  });
  res.status(200).json("successfull")
}

exports.getPatient = async (req, res) => {
  let patient = await Patients.findOne({ email: req.body.email}) ;
  res.status(200).json(patient.done)
}



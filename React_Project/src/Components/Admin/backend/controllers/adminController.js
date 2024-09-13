const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Allowed Admins
const allowedAdmins = ['Aanchal', 'Vinita', 'Khushboo', 'Chandani'];

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const registerAdmin = async (req, res) => {
  const { email, password, name } = req.body;

  if (!allowedAdmins.includes(name)) {
    return res.status(400).json({ error: 'You are not allowed to register' });
  }

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    return res.status(400).json({ error: 'Admin already exists' });
  }

  const admin = await Admin.create({ email, password, name });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      email: admin.email,
      name: admin.name,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400).json({ error: 'Invalid admin data' });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      email: admin.email,
      name: admin.name,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
};

module.exports = { registerAdmin, loginAdmin };

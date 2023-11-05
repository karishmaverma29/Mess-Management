import bcrypt from "bcrypt";
import userModels from "../models/userModels.js";
import { comparePassword, hashpassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import wardenModels from "../models/wardenModels.js";
import managerModels from "../models/managerModels.js";
import accountantModels from "../models/accountantModels.js";

//user registration
export const userregisterController = async (req, res) => {
  try {
    const { name, reg, email, password, phone, hostel, role } = req.body;
    if (!name || !reg || !email || !phone || !password || !hostel || !role) {
      return res.send({ message: "field empty" });
    }

    //for getting valid college format email id
    const parts = name.split(" "); // Split the string by space
    const firstName = parts[0]; // Get the first part
    const firstNameLowercase = firstName.toLowerCase();

    //for verifying mail format
    if (email != `${firstNameLowercase}.${reg}@mnnit.ac.in`)
      return res.send({ message: "Wrong mail id" });

    const existingUser = await userModels.findOne({ email });
    if (existingUser)
      return res.status(200).send({
        success: false,
        message: "user already exist",
      });

    const hashedpassword = await hashpassword(password);
    const user = await new userModels({
      name,
      reg,
      email,
      phone,
      hostel,
      password: hashedpassword,
      role,
    }).save();
    res.status(200).send({
      success: true,
      message: "User Registration success",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      e,
    });
  }
};

//warden register
export const wardenregisterController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //for verifying mail format
    const hashedpassword = await hashpassword(password);
    const user = await new wardenModels({
      name,
      email,
      password: hashedpassword,
      role,
    }).save();
    res.status(200).send({
      success: true,
      message: "User Registration success",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      e,
    });
  }
};

//accountant register
export const accountantregisterController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //for verifying mail format
    const hashedpassword = await hashpassword(password);
    const user = await new accountantModels({
      name,
      email,
      password: hashedpassword,
      role,
    }).save();
    res.status(200).send({
      success: true,
      message: "User Registration success",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      e,
    });
  }
};

//manager register
export const managerregisterController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //for verifying mail format
    const hashedpassword = await hashpassword(password);
    const user = await new managerModels({
      name,
      email,
      password: hashedpassword,
      role,
    }).save();
    res.status(200).send({
      success: true,
      message: "User Registration success",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      e,
    });
  }
};

//User login
export const UserloginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        hostel: user.hostel,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//warden login
export const wardenloginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user

    const user = await wardenModels.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//accountant login
export const accountantloginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user

    const user = await accountantModels.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//manager login
export const managerloginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user

    const user = await managerModels.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPasswordController
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email || !answer || !newPassword) {
      res.status(400).send({ message: "Field required" });
    }

    //check
    const user = await userModels.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }

    const hashed = await hashpassword(newPassword);
    await userModels.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      e,
    });
  }
};

//test controller
export const testController = (req, res) => {
  res.status(200).send({
    message: "protected route",
  });
};

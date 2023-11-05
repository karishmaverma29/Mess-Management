import express from "express";
import JWT from "jsonwebtoken";
import {
  UserloginController,
  wardenloginController,
  accountantloginController,
  managerloginController,

  userregisterController,
  accountantregisterController,
  managerregisterController,
   wardenregisterController,
   
  testController,
  forgotPasswordController,
  
} from "../controllers/authController.js";
// import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

//routing
//register
router.post("/register", userregisterController);

//warden register
router.post("/wardenregister", wardenregisterController);

//accountant  register
router.post("/accountantregister", accountantregisterController);

// manger register
router.post("/managerregister", managerregisterController);

//forget password
router.post("/forgot-password", forgotPasswordController);

//user login
router.post("/userlogin", UserloginController);

//warden login
router.post("/wardenlogin", wardenloginController);
//accountant login
router.post("/accountantlogin", accountantloginController);
//manager login 
router.post("/managerlogin", managerloginController);
// //test
// router.get("/test", requireSignIn, isAdmin, testController);

// //forget password
// router.post("/forgot-password", forgotPasswordController);

// //user protected route
// router.get("/user-auth", requireSignIn, (req, res) => {
//   res.status(200).send({ ok: true });
// });

// //admin protected route
// router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
//   res.status(200).send({ ok: true });
// });
export default router;

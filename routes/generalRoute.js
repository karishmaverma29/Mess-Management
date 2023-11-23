import express from "express";
import {
  feedbackController,
  createNewPollController,
  createPollcontroller,
  deletePollcontroller,
  resolveComplainController,
  submitPollcontroller,
  userComplainController,
  viewComplainController,
  viewfeedbackController,
  viewPollcontroller,
  viewAlluserController,
  blockUserController,
  unblockUserController,
  viewFilteredUsersController,
  viewSingleuserController,
  updatesingleuserController,
  paymentController,
  getallpayment,
  getpaymentPhotoController,
  verifypaymentController,
  searchpaymentController,
} from "./../controllers/generalController.js";
import {
  ApproveMenuReq,
  Deletereq,
  menureqsend,
  viewMenuRequests,
} from "../controllers/generalController.js";

import formidable from "express-formidable";

const router = express.Router();

//for registring complain
router.post("/complain", userComplainController);
//for viewing complain
router.get("/viewcomplain", viewComplainController);
// for resolve complain
router.put("/resolvecomplain/:id", resolveComplainController);

//for feedback
router.post("/feedback", feedbackController);

//for viewing feedback
router.get("/viewfeedback", viewfeedbackController);
//for sending menureq to warden
router.post("/menureqsend", menureqsend);
//for view mess menu req
router.get("/viewmessreq", viewMenuRequests);
//for delete approved menu req
router.delete("/deletereq", Deletereq);
//approve menu req
router.put("/approvemenureq", ApproveMenuReq);

//for payment
router.post("/payment/:userid", formidable(), paymentController);

//create new poll
router.post("/createnewpoll", createNewPollController);
//create poll
router.put("/createpoll/:pollId", createPollcontroller);
router.get("/getPoll", viewPollcontroller);
router.post("/submitpoll", submitPollcontroller);
router.delete("/deletepoll/:pollId", deletePollcontroller);
//all user
router.get("/viewuser", viewAlluserController);
router.post("/blockuser", blockUserController);
router.post("/unblockuser", unblockUserController);
router.get("/viewFilteredUsers", viewFilteredUsersController);
router.get("/myprofile", viewSingleuserController);
router.put("/updateProfile/:userId", updatesingleuserController);
router.post("/payment/:userid", formidable(), paymentController);
//get payments
router.get("/getpayment", getallpayment); //get photo
router.get("/paymentReceipt/:pid", getpaymentPhotoController);
router.put("/verifypayment", verifypaymentController);
router.get("/searchgetpayment", searchpaymentController);

export default router;

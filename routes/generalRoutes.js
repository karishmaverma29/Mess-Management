import express from "express";
import JWT from "jsonwebtoken";
import {
  ApproveMenuReq,
  Deletereq,
  menureqsend,
  viewMenuRequests,
} from "../controllers/generalController.js";

// router object
const router = express.Router();

router.post("/menureqsend", menureqsend);
router.get("/viewmessreq", viewMenuRequests);
router.delete("/deletereq", Deletereq);
router.put("/approvemenureq", ApproveMenuReq);
export default router;

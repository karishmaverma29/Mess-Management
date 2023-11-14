import express from "express";
import { feedbackController, resolveComplainController, userComplainController, viewComplainController, viewfeedbackController } from './../controllers/generalController.js';






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



export default router;
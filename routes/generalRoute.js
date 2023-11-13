import express from "express";
import { resolveComplainController, userComplainController, viewComplainController } from './../controllers/generalController.js';






const router = express.Router();

//for registring complain
router.post("/complain", userComplainController);

//for viewing complain
router.get("/viewcomplain", viewComplainController);
// for resolve complain
router.put("/resolvecomplain/:id", resolveComplainController);



export default router;
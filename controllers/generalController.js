import bcrypt from "bcrypt";
import { comparePassword, hashpassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import complainModels from "../models/complainModels.js";
import feedbackModels from "../models/feedbackModels.js";


// fro registring complain
export const userComplainController = async (req, res) => {
    try {
      const { name, reg, complain } = req.body;
      if (!name || !reg || !complain) {
        return res.send({ message: "field empty" });
      }
      
      const usercomplain = await new complainModels({
        name,
        reg,
        complain,
      }).save();
  

      res.status(200).send({
        success: true,
        message: "Complain Registered",
        
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        success: false,
        message: "Error in complain registration",
        e,
      });
    }
  };


//for viewing complain

export const viewComplainController=async( req,res)=>{

  
    try {

      const complainData = await complainModels.find({});
      res.status(200).json(complainData);
    } catch (error) {
      console.error('Error fetching complain data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


  //for resolve complain

  export const resolveComplainController = async (req, res) => {
    try {

        const  complainId =req.params.id;
        console.log(complainId);
      
      const updatedComplain = await complainModels.findOneAndUpdate(
        { _id:complainId  },
        { resolve: "1" },
        { new: true } // Set to true to return the updated document
      );
  
      if (!updatedComplain) {
        // If the document is not found
        return res.status(404).json({ message: 'Complain not found' });
      }
  
      res.status(200).json(updatedComplain);
    } catch (error) {
      console.error('Error updating complain data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

 //////////////////////////////////////////////////////////////feed back


  

export const feedbackController = async (req, res) => {
    try {
      const { foodRating,serviceRating,feedback,name} = req.body;
      if (!foodRating || !serviceRating ) {
        return res.send({ message: "field empty" });
      }
      
      const userfeedback = await new feedbackModels({
        foodRating,
            serviceRating,
            feedback,
            name,
      }).save();
  

      res.status(200).send({
        success: true,
        message: "Feedback Submitted",
        
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        success: false,
        message: "Error in feedback submission",
        e,
      });
    }
  };

  ////////////////////////////////////////////////////view feedback

  export const viewfeedbackController=async( req,res)=>{

  
    try {

      const feedbackData = await feedbackModels.find({});
      res.status(200).json(feedbackData);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


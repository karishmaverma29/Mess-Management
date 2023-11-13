import bcrypt from "bcrypt";
import { comparePassword, hashpassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import menureqModels from "../models/menureqModels.js";

//for menu approval req
export const menureqsend = async (req, res) => {
  try {
    const { combinedValues } = req.body;

    // Check if combinedValues is an array and not empty
    if (!Array.isArray(combinedValues) || combinedValues.length === 0) {
      return res.status(400).send({
        success: false,
        message:
          "Invalid data format. Expecting non-empty array in combinedValues.",
      });
    }

    // Save the array data to the database
    const reqData = await menureqModels.create({
      managerreq: combinedValues,
    });

    return res.status(200).send({
      success: true,
      message: "Request sent to warden",
      data: reqData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in sending request",
      error: error.message,
    });
  }
};

//for view manu req
export const viewMenuRequests = async (req, res) => {
  try {
    const reqData = await menureqModels.find({});
    console.log(reqData); // Log the data before sending the response for debugging purposes

    return res.status(200).json({
      success: true,
      message: "Menu requests retrieved successfully",
      data: reqData,
    });
  } catch (error) {
    console.error("Error in getting menu requests:", error);

    return res.status(500).json({
      success: false,
      message: "Error in getting menu requests",
      error: error.message,
    });
  }
};

//approve menu req
export const ApproveMenuReq = async (req, res) => {
  const { menuRequestId, comment } = req.body;
  try {
    // Find the menu request by ID
    const menuRequest = await menureqModels.findById(menuRequestId);

    if (!menuRequest) {
      return res
        .status(404)
        .json({ success: false, message: "Menu request not found" });
    }

    // Update the status to "1" and add the warden message with the comment
    menuRequest.status = "1";
    menuRequest.wardenmessage = comment;

    // Save the updated menu request
    await menuRequest.save();

    return res
      .status(200)
      .json({ success: true, message: "Menu request approved successfully" });
  } catch (error) {
    console.error("Error updating menu request:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error updating menu request",
      error: error.message,
    });
  }
};

// For deleting req message of menu with manager
export const Deletereq = async (req, res) => {
  const id = req.body.id;

  try {
    // Use Mongoose to find and remove data by ID
    const deletedData = await menureqModels.deleteOne(id);

    if (!deletedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    // Respond with a success message or deleted data
    return res.json({ message: "Data deleted successfully", deletedData });
  } catch (error) {
    // Handle errors, e.g., database error
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

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

  // export const resolveComplainController = async (req, res) => {
  //   try {
  //     const { id } = req.body;
  
  //     const updatedComplain = await complainModels.findOneAndUpdate(
  //       { _id: id },
  //       { resolve: 1 },
  //       { new: true } // Set to true to return the updated document
  //     );
  
  //     if (!updatedComplain) {
  //       // If the document is not found
  //       return res.status(404).json({ message: 'Complain not found' });
  //     }
  
  //     res.status(200).json(updatedComplain);
  //   } catch (error) {
  //     console.error('Error updating complain data:', error);
  //     res.status(500).json({ message: 'Internal server error' });
  //   }
  // };
  



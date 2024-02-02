// NoticeForm.js
import React, { useState } from "react";
import { useAuth } from "../../../context/auth";
import axios from "axios";

const Createnotice = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "John",
    content: "Doe",
    file: null,
    datepicker: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="title">Title:</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="file">Choose file:</label>
      <input type="file" id="file" name="file" onChange={handleChange} />
      <br />

      <label htmlFor="datepicker">Choose a date:</label>
      <input
        type="date"
        id="datepicker"
        name="datepicker"
        value={formData.datepicker}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="content">Content:</label>
      <br />
      <textarea
        id="content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        rows={5} // Adjust the number of rows as needed
        cols={50} // Adjust the number of columns as needed
      />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Createnotice;

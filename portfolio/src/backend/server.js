const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const xlsx = require("xlsx");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to save data to Excel
app.post("/save-to-excel", (req, res) => {
  const { name, phone, message } = req.body;

  // Define the file path
  const filePath = "./messages.xlsx";

  // Read existing data or create a new one
  let workbook;
  let worksheet;
  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    worksheet = workbook.Sheets["Messages"];
  } else {
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.json_to_sheet([]);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Messages");
  }

  // Convert worksheet to JSON and add the new data
  const existingData = xlsx.utils.sheet_to_json(worksheet);
  existingData.push({ Name: name, Phone: phone, Message: message });

  // Convert updated data back to worksheet
  const updatedWorksheet = xlsx.utils.json_to_sheet(existingData);
  workbook.Sheets["Messages"] = updatedWorksheet;

  // Write to the Excel file
  xlsx.writeFile(workbook, filePath);

  res.status(200).json({ message: "Data saved successfully to Excel!" });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const EXCEL_FILE_PATH = path.join(__dirname, 'students.xlsx');

// Ensure the Excel file exists on startup
const initializeExcelFile = () => {
  if (!fs.existsSync(EXCEL_FILE_PATH)) {
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet([]);
    // Define headers
    xlsx.utils.sheet_add_aoa(worksheet, [["Name", "Email", "Phone", "College", "Department", "Selected Plan", "Amount", "Date"]], { origin: "A1" });
    xlsx.utils.book_append_sheet(workbook, worksheet, "Students");
    xlsx.writeFile(workbook, EXCEL_FILE_PATH);
    console.log("Created new students.xlsx file at:", EXCEL_FILE_PATH);
  }
};

initializeExcelFile();

app.post('/save-student', (req, res) => {
  try {
    const { name, email, phone, college, department, planName, amount } = req.body;
    
    // Format current date
    const dateStr = new Date().toISOString().split('T')[0];

    // Read the existing file
    const workbook = xlsx.readFile(EXCEL_FILE_PATH);
    const worksheet = workbook.Sheets["Students"];
    
    // Get existing data to find how many rows we have
    const existingData = xlsx.utils.sheet_to_json(worksheet);
    
    const newRow = {
      "Name": name,
      "Email": email,
      "Phone": phone,
      "College": college || "N/A",
      "Department": department || "N/A",
      "Selected Plan": planName,
      "Amount": amount,
      "Date": dateStr
    };

    // Append to existing data
    existingData.push(newRow);
    
    // Re-create the sheet with updated data
    const newWorksheet = xlsx.utils.json_to_sheet(existingData);
    workbook.Sheets["Students"] = newWorksheet;
    
    // Write back to file
    xlsx.writeFile(workbook, EXCEL_FILE_PATH);
    
    console.log(`Saved student ${name} to Excel.`);
    res.status(200).json({ message: "Student data saved successfully." });
    
  } catch (error) {
    console.error("Error saving student data:", error);
    res.status(500).json({ error: "Failed to save student data." });
  }
});

app.get('/download', (req, res) => {
  if (fs.existsSync(EXCEL_FILE_PATH)) {
    res.download(EXCEL_FILE_PATH, 'students.xlsx');
  } else {
    res.status(404).json({ error: "No student data found yet." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend Server running on http://localhost:${PORT}`);
  console.log(`Excel file is located at: ${EXCEL_FILE_PATH}`);
});

// Q5d_fs.js – Node.js File System Module
// Run: node Q5d_fs.js
// Result: src.txt will be created in the same folder

const fs   = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src.txt');
const content  = "HTML, CSS, JavaScript, TypeScript, MongoDB, Express.js, React.js, Node.js";

// Create / Write file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("src.txt created successfully!");

    // Read the file back to verify
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        console.log("File contents:", data);
      }
    });
  }
});

// Q8c_mongoose_crud.js – MongoDB CRUD Operations using Mongoose
// Install: npm install express mongoose body-parser
// Start MongoDB server before running
// Run:     node Q8c_mongoose_crud.js
// Test via browser: http://localhost:3000/students

const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app        = express();
const PORT       = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser:    true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error:', err));

// Schema and Model
const studentSchema = new mongoose.Schema({
  name: String,
  age:  Number
});
const Student = mongoose.model('Student', studentSchema);

// CREATE – Add a student
app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send('Student added successfully');
});

// READ – Get all students
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// UPDATE – Update student by ID
app.put('/students/:id', async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send('Student updated successfully');
});

// DELETE – Delete student by ID
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send('Student deleted successfully');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

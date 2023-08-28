// This is the file which the backend server is created in
// This integrates express into the file
const express = require('express');
// This integrates an express app which can be used to create routes
const app = express();
// This integrates dotenv package into the file
const dotenv = require('dotenv');
dotenv.config();
// This integrates cors package to allow data requests from client-side
const cors = require('cors');
app.use(cors());
// This tells express to get data in JSON format
app.use(express.json());

// This gets database functions from AppDatabase.js file and integrates them into this module
const {getNotes, insertNote, deleteNote, updateNote, displayAnswers,
     updateAnswer} = require('./AppDatabase.js');
// This tells express to listen to port 3000
app.listen(3000, () => {
    console.log('Running on port 3000');
});
// This creates a get route which gets all notes
app.get('/getAll', async (req, res) => {
    const notes = await getNotes()
    res.send(notes); 
});
// This creates a post route which inserts a note with parameters step and note
app.post('/createNote', async (req, res) => {
    const {step, note} = req.body
    const createdNote = await insertNote(step, note)
    res.send(createdNote);
});
// This creates a delete route which deletes a note with parameter note_id
app.delete('/deleteNote/:note_id', async (req, res) => {
    const {note_id} = req.params;
    const deletedNote = await deleteNote(note_id);
    res.send(deletedNote);
})
// This creates a patch route which updates a note and takes parameters note and note_id
app.patch('/updateNote', async (req, res) => {
    const {note, note_id} = req.body;
    const updatedNote = await updateNote(note, note_id);
    res.send(updatedNote);
})
// This creates a get route which gets all answers
app.get('/getAnswers', async (req, res) => {
    const displayedAnswer = await displayAnswers();
    res.send(displayedAnswer);
})
// This creates a patch route which updates an answer and takes parameters answer and answer_id 
app.patch('/updateAnswer', async (req, res) => {
    const {answer, answer_id} = req.body;
    const updatedAnswer = await updateAnswer(answer, answer_id);
    res.send(updatedAnswer);
})

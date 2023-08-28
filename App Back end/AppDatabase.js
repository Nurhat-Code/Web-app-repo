// This file establishes connection to MySQL database
// Here, the installed dotenv package is integrated to use environment variables
require("dotenv").config();
// This integrates mysql2 package into the file
const mysql = require("mysql2");
/* This creates a pool which takes several properties to establish connection to the database.
Environment variables are entered as values*/
const pool = mysql.createPool({
    host: process.env.Host,
    user: process.env.User,
    database: process.env.DatabaseName,
    password: process.env.Password,
    port: process.env.DatabasePort
}).promise();

// This function gets all notes from the notes table in the database
async function getNotes() {
    const allNotes = await pool.query(`
    SELECT * FROM notes`)
    return allNotes;
};
/* This function inserts a new entry into the notes table in the database. Parameterized statements
   are used to avoid SQL injection*/  
async function insertNote(step, note) {
    const addedNote = await pool.query(`
    INSERT INTO notes (step, note)
    VALUES (?,?)`, [step, note])
    return addedNote;
};
// This function deletes an entry in the notes table in the database
async function deleteNote(note_id) {
    const deletedNote = await pool.query(`
    DELETE FROM notes
    WHERE note_id = ?`, [note_id])
    return deletedNote;
};
// This function updates an entry in the notes table in the database
async function updateNote(note, note_id) {
    const updatedNote = await pool.query(`
    UPDATE notes SET note = ? WHERE note_id = ?`, [note, note_id])
    return updatedNote;
}
// This function gets all answers from the answers table in the database
async function displayAnswers() {
    const answers = await pool.query(`
    SELECT * FROM answers`)
    return answers;
}
// This function updates an answer in the answers table in the database
async function updateAnswer(answer, answer_id) {
    const updatedAnswer = await pool.query(`
    UPDATE answers SET answer= ? WHERE answer_id= ?`, [answer, answer_id])
    return updatedAnswer;
}

/*There is no create or delete route for answers table because there is a fixed number of questions.
Therefore, I have created entries in the answers table in MySQL for each question in step sections.
Users can either see these answers on the web page or update these answers*/

// This exports all functions in this file so that they can be used in other modules
module.exports = {getNotes, insertNote, deleteNote, updateNote, displayAnswers, updateAnswer};
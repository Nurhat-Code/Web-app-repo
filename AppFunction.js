//This file adds functionality to the web app
/* After the content of the page is loaded, this event listener fetches the get route and gets all
 notes that exist in the database*/
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/getAll')
    // The response is returned as JSON
    .then(res => { return res.json()})
    /*For each returned note, a div element is created. This element contains the corresponding note 
    and save and delete buttons to manipulate data and is appended to the corresponding step section*/
    .then(data => { data[0].forEach(noteItem => {
        let i = noteItem.step
        if (0 < i < 7) {
            let dataContainer = document.createElement('div');
            dataContainer.innerHTML = `<input type="text" id=${noteItem.note_id} size="90"
            value="${noteItem.note}">
            <button class="saveButton">SAVE</button>
            <button class="deleteButton">DELETE</button>`
            notesSection[i-1].append(dataContainer);
            return;
        }
    })
        
    }

    )
    // This catches errors if there are any    
    .catch(error => console.error(error));
    
    /*The event listener also gets all answers in the database and displays them in the input area 
     of the corresponding question*/ 
    fetch('http://localhost:3000/getAnswers')
    .then(res => {return res.json()})
    .then(data => { 
        for (i=1; i < 21; i++) {
            if (data[0][i-1].answer_id = i) {
                answerInputs[i-1].value = data[0][i-1].answer
            }
        }
    }).catch(error => console.error(error));

}); 

// This gets note section of each step section
let notesSection = document.querySelectorAll('.Notes'); 
// This gets all inputs for each question 
let answerInputs = document.getElementsByClassName('answerInput');
// This gets all 'save answer' buttons in the step sections
let answerButtons = document.querySelectorAll('.answerButton');

/*For each 'save answer' button, a click event is added. When a button is clicked, the corresponding
 value in the input field of a question is set as answer in the corresponding entry in the database*/
answerButtons.forEach(answerButton => {
    answerButton.addEventListener('click', (event) => {
        let button = event.target
        let input = button.parentElement.children[1]
        fetch('http://localhost:3000/updateAnswer', {
            headers: { 'Content-type': 'application/json'},
            method: 'PATCH',
            body: JSON.stringify({
                answer_id: input.id,
                answer: input.value
            })
            })
        
})});

// This gets the element that contains all step sections
let stepSections = document.querySelector('.stepSections');

// This gets the section of step 1
let step1Section = document.querySelector('.step1Section');
// This gets the button for step 1
let stepButton1 = document.getElementById('step1');

// This gets the section of step 2
let step2Section = document.querySelector('.step2Section');
// This gets the button for step 2
let stepButton2 = document.getElementById('step2');

// This gets the section of step 3
let step3Section = document.querySelector('.step3Section');
// This gets the button for step 3
let stepButton3 = document.getElementById('step3');

// This gets the section of step 4
let step4Section = document.querySelector('.step4Section');
// This gets the button for step 4
let stepButton4 = document.getElementById('step4');

// This gets the section of step 5
let step5Section = document.querySelector('.step5Section');
// This gets the button for step 5
let stepButton5 = document.getElementById('step5');

// This gets the section of step 6
let step6Section = document.querySelector('.step6Section');
// This gets the button for step 6
let stepButton6 = document.getElementById('step6');
// This gets the element with class background
let background = document.querySelector('.background');

// When pressed, step 1 button opens the section of step 1 and background
stepButton1.addEventListener('click', () => {
    step1Section.classList.toggle('hidden1');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});
/* Close button of step 1 section is assigned and when pressed, it closes the step 1 section and 
 background */
let close1 = document.getElementById('close1');
close1.addEventListener('click', () => {
    step1Section.classList.toggle('hidden1');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});

// When pressed, step 2 button opens the section of step 2 and background
stepButton2.addEventListener('click', () => {
    step2Section.classList.toggle('hidden2');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});
/* Close button of step 2 section is assigned and when pressed, it closes the step 2 section and 
background */
let close2 = document.getElementById('close2');
close2.addEventListener('click', () => {
    step2Section.classList.toggle('hidden2');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});

// When pressed, step 3 button opens the section of step 3 and background
stepButton3.addEventListener('click', () => {
    step3Section.classList.toggle('hidden3');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});
/* Close button of step 3 section is assigned and when pressed, it closes the step 3 section and 
background */
let close3 = document.getElementById('close3');
close3.addEventListener('click', () => {
    step3Section.classList.toggle('hidden3');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});

// When pressed, step 4 button opens the section of step 4 and background
stepButton4.addEventListener('click', () => {
    step4Section.classList.toggle('hidden4');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});
/* Close button of step 4 section is assigned and when pressed, it closes the step 4 section and 
background */
let close4 = document.getElementById('close4');
close4.addEventListener('click', () => {
    step4Section.classList.toggle('hidden4');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});

// When pressed, step 5 button opens the section of step 5 and background
stepButton5.addEventListener('click', () => {
    step5Section.classList.toggle('hidden5');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});
/* Close button of step 5 section is assigned and when pressed, it closes the step 5 section and 
background */
let close5 = document.getElementById('close5');
close5.addEventListener('click', () => {
    step5Section.classList.toggle('hidden5');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});

// When pressed, step 6 button opens the section of step 6 and background
stepButton6.addEventListener('click', () => {
    step6Section.classList.toggle('hidden6');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});
/* Close button of step 6 section is assigned and when pressed, it closes the step 6 section and 
background */
let close6 = document.getElementById('close6');
close6.addEventListener('click', () => {
    step6Section.classList.toggle('hidden6');
    stepSections.classList.toggle('hidden');
    background.classList.toggle('opened');
});

// This gets all 'add note' buttons in the step sections
let addNoteButtons = document.querySelectorAll('.addNoteButton');
/*For each 'add note' button, a click event is added. When clicked, a new note is inserted into the
 database*/
addNoteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        clickedButton = event.target
    fetch('http://localhost:3000/createNote', {
        headers: { 'Content-type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
            step: clickedButton.id,
            note: 'new note' 
        })
        /*After a new note is inserted, it is appended to the notes section of the corresponding 
        step section*/
    }).then(res => {return res.json()}).then(data => {
        let id = clickedButton.id
        while (0 < id < 7) {
                let dataContainer = document.createElement('div');
                dataContainer.innerHTML = `<input type="text" class="noteInput"
                placeholder="Type Your Note Here. Click Save to save it" id=${data[0].insertId}
                size="90" value="new note">
                <button class="saveButton">SAVE</button>
                <button class="deleteButton">DELETE</button>`
                notesSection[id-1].append(dataContainer);
                return;
            };
        
        
    });});
});

/* For each note section, an event listener is added. If the clicked element is a delete button,
 the note corresponding to that button is removed both from the note section and the database */
notesSection.forEach(noteList => {
noteList.addEventListener('click', (event) => {
    if (event.target.className === 'deleteButton') {
        let input = event.target.parentElement.children[0];
        fetch('http://localhost:3000/deleteNote/' + input.id, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => console.log(data));
        event.target.parentElement.remove();
    }
    /*If the clicked element is a save button, the note corresponding to that button will be updated
    both in the note section and in the database */
    if (event.target.className === 'saveButton') {
        let input = event.target.parentElement.children[0];
        fetch('http://localhost:3000/updateNote', {
        headers: { 'Content-type': 'application/json'},
        method: 'PATCH',
        body: JSON.stringify({
            note: input.value,
            note_id: input.id 
        })
        });
    }
});
}) 

/*This is a test case. An event listener is added to the 'get notes' button so that when clicked, 
it will get all notes in the database and display it in the console. This is done to test if add,
delete and save buttons function properly and successfully manipulates data in the database */
let getNotesButton = document.getElementById('getNotesButton');
getNotesButton.addEventListener('click', () => {
    fetch('http://localhost:3000/getAll')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
/*This is a test case. An event listener is added to the 'get answers' button so that when clicked, 
it will get all answers in the database and display it in the console. This is done to test if save
answer buttons function properly and successfully updates data in the database */
let getAnswersButton = document.getElementById('getAnswersButton');
getAnswersButton.addEventListener('click', () => {
    fetch('http://localhost:3000/getAnswers')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});



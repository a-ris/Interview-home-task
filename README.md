# Interview-home-task
1. Implement Notes app on React.js
Description:
Notes app is a simple app that allows user to create and delete notes, reminders and other text
information.
Use cases:
1. User opens the app, and sees list of notes he/she created.
2. User wants to create new note, so, he/she writes some text and clicks 'Create Note'. Then user sees
that new note was added to the list.
3. User wants to delete some note, so, user clicks on remove button, which is placed near the note.
Then note is removed from the list.
Requirements:
1. App must let user create note
2. App must let user delete note
3. App must let user see list notes that user saved
4. State management (i.e. storing/creating/removing notes) should be implementing using Redux
5. No backend is needed, just frontend app
*Additional tasks (optional)
1. Implement update note feature

2. Solve JS tasks

2.1 What is the order of logging? Please explain why.

(function() {
 console.log(1);
 setTimeout(function(){console.log(2)}, 1000);
 setTimeout(function(){console.log(3)}, 0);
 console.log(4);
})();

2.2 Write a function that would allow you to do this:

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

Code sharing:
Create public GitHub repository and send the link when tasks will be ready.

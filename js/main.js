let addNote = document.getElementById("add-note");

let noteTitle = document.getElementById("note-title");

let noteBody = document.getElementById("note-body");

addNote.addEventListener("click", (e) => {
  if (noteTitle.value == "" || noteBody.value == "") {
    return alert("Enter note title and description.");
  }

  if (noteTitle.value != "" || noteBody.value != "") {
    localStorage.setItem(noteTitle.value, noteBody.value);
  }
});

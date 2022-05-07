const {
  addNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNote
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNotes
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteById
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteById
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById
  }
];

module.exports = routes;

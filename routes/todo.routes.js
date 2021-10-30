const controller = require('../controllers/todo.controller');

module.exports = (app) => {
    //get all todo's
    app.get('/api/todo', controller.getAllTodo);
    //get todo by id
    app.get('/api/todo/:id', controller.getTodoById);
    //update todo
    app.put('/api/todo/:id', controller.updateTodoById);
    //create
    app.post('/api/todo', controller.createTodo);
    //delete
    app.delete('/api/todo/:id', controller.deleteTodoById);
};

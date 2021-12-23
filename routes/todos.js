const router = require("express-promise-router")(); // router speciale qui permet d'utiliser les asynchrone

const { getAllTodos, deleteTodo, updateTodo, deleteTodoById, updateTodoById, test } = require("../controllers/todos")

router
    .route("/todos")
    .get(getAllTodos) // methode : 
    
router
    .route("/todos/:id") // le : est une route paramétré / à noter directement dans l'url ex 2 pour "id2"
    .delete(deleteTodo)
    .put(updateTodo)
    .delete(deleteTodoById)
    .put(updateTodoById);

router
    .route("/test")
    .get(test);
    

module.exports = router;
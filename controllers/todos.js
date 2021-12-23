/*****************fake database***************/

const todos = [
    {id: 1, texte: "premiere tache" },
    {id: 2, texte: "seconde tache" },
    {id: 3, texte: "troisieme tache"}
]

/****controllers/todos */
const pool = require("../config/database");

/*****************controllers/todos **************/ 

module.exports = {
  getAllTodos: (req, res) => {
    res.status(200).json({ success: todos }); // si tous ce passe bien ça renvoie success plus le tableau todos
  },
  getTodoById: (req, res) => {
    const { id } = req.params;

    const result = todos.filter((todo) => id == todo.id);
    return res.status(200).json({ success: result[0] });
  },
  deleteTodo: (req, res) => {
    const { id } = req.params;
    todos.forEach((element, index) => {
      if (id == element.id) {
        todos.splice(0, todos.length); // suppression de tout le tableau de 0 a length toute la longueur
      }
    });
    return res
      .status(200)
      .json({ success: "La todo a bien été supprimé", todos: todos }); // reponse avec message parser en json
  },

  updateTodo: (req, res) => {
    const { id } = req.params;
    const { texte } = req.body;

    todos.forEach((element, index) => {
      if (id == element.id) {
        todos[index].texte = texte;
      }
    });
    res.status(200).json({ success: todos });
  },

  deleteTodoById: (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((todo) => id == todo.id);

    delete todos[index];

    return res.status(200).json({ success: todos });
  },

  updateTodoById: (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    const index = todos.findIndex((todo) => id == todo.id);
    todos[index].index = texte;

    res.status(200).json({ success: todos });
  },
  test: async (req, res) => {
    let connexion;
    try {
      connexion = await pool.getConnection();
      const result = await connexion.query("SELECT * FROM todo;");
      console.log(result);
      return res.status(200).json({ success: result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    } finally {
      if (connexion) connexion.end();
    }
  }
};
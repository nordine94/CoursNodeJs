const express = require("express");// import express from 'express';

/** Base de données  */


const app = express();
app.use(express.json());


const todos = [
  { id: 1, texte: "premiere tache" },
  { id: 2, texte: "seconde tache" },
  { id: 3, texte: "troisieme tache" },
];




const insertTodo = (todo) => {
  todos.push(todo);
};

const deleteTodo = (id) => {
    todos.forEach((element, index) => {
        if (id == element.id) {
            todos.splice(index, 1)
        }
        
    });
}
const updateTodo = (id, texte) => {
    todos.forEach((element, index) => {
        if (id == element.id) {
           todos[index].texte = texte;
        }
        
    });
}



app.post("/insertion", (req, res) => {
  const { id, texte } = req.body;

  insertTodo({ id, texte });

  return res
    .status(200)
    .json({ success: "La todo a bien été ajouté", todos: todos });
});



app.delete("/suppression", (req, res) => {
  const { id } = req.body;

  deleteTodo(id);

  return res
    .status(200)
    .json({ success: "La todo a bien été supprimé", todos: todos });
});


app.put("/update", (req, res) => {
  const { id, texte } = req.body;

  updateTodo(id, texte);

  return res
    .status(200)
    .json({ success: "La todo a bien été mis à jour", todos: todos });
});



app.listen(3000);
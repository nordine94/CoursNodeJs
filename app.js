require("dotenv").config({ path: `./config/${process.env.NODE_ENV}.env`});

const express = require("express");

const app = express();

app.use(express.json()); // utilisé comme un middleware // permet de traduire du json // permet de comprendre et de parler en json

app.get("/api", ( _ , res) => {
    res.status(200).json({ success: "Todos API v1"});
}); // route qui permet de tester le fonctionnemment

const todosRoute = require("./routes/todos"); // on importe ce qui est exporté dans le fichier todos
app.use("/api", todosRoute); // on utilise le router comme middleware // middleware : Un middleware est un logiciel qui crée la connexion entre plusieurs applications et leur fournit des fonctionnalités et des services communs. 

 
app.listen(process.env.PORT, () => {
     console.log(`Server listening on port ${process.env.PORT}`);
}); // on indique à l'utilisateur qu'on va se connecter à utiliser le port 3000

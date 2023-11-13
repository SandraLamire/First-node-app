// EXPRESS : Création d'un serveur minimal
// Ajouter "type": "module", avant dépendances dans package.json
// pour utiliser import suivant au lieu de const express = require('express');
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})
// Lancer npm start pour vérifier le bon fonctionnement de l'appli
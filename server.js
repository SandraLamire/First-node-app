import express from 'express';
import { getMerakiData, getOrganizations } from './merakiService.js';


const app = express();
const port = 3000;

// Route racine (inutile ici car elle renvoie la page Dashboard)
app.get('/', async (req, res) => {
  try {
    const merakiData = await getMerakiData();
    console.log(merakiData);
    res.send('Données depuis l\'API Meraki : ' + merakiData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// http://localhost:3000/organizations
app.get('/organizations', async (req, res) => {
  try {
    const organizations = await getOrganizations();
    console.log(organizations);
    res.send('Organisations depuis l\'API Meraki : ' + JSON.stringify(organizations));
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});
// Organisations depuis l'API Meraki : [{"id":"644380","name":"Sensing Vision","url":"...]

app.listen(port, () => {
  console.log(`Le serveur écoute à http://localhost:${port}`);
});

// Lancer npm start pour vérifier le bon fonctionnement de l'appli
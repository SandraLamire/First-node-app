// AXIOS : installer d'abord avec npm install axios
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const merakiApiKey = process.env.MERAKI_API_KEY;


if (!merakiApiKey) {
  throw new Error('La clé API Meraki n\'est pas définie dans les variables d\'environnement.');
}

// URL API : https://api.meraki.com/api/v1/<resource>
const getMerakiData = async () => {
  try {
    const response = await axios.get('https://api.meraki.com/v1/endpoint', {
      headers: {
        'X-Cisco-Meraki-API-Key': merakiApiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erreur lors de la récupération des données depuis l\'API Meraki');
  }
};

export { getMerakiData };

const getOrganizations = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.meraki.com/api/v1/organizations',
      headers: {
        'X-Cisco-Meraki-API-Key': merakiApiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erreur lors de la récupération des organisations depuis l\'API Meraki');
  }
};

export { getOrganizations };

import axios from 'axios';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

const createNewDeck = async () => {
  const response = await axios.get(`${API_BASE_URL}/new/shuffle/`);
  return response.data;
};

const drawCards = async (deckId, count) => {
  const response = await axios.get(`${API_BASE_URL}/${deckId}/draw/?count=${count}`);
  return response.data;
};

export default {
  createNewDeck,
  drawCards,
};

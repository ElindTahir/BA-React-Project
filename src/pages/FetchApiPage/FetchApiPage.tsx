import React, { useState, useEffect } from 'react';
import deckOfCardsService from '../../service/deck-of-cards-service/deck-of-cards-service.tsx';
import styles from './FetchApiPage.module.scss';

function FetchApiPage() {
  const [deckId, setDeckId] = useState('');
  const [cards, setCards] = useState([]);
  const [numCardsToDraw, setNumCardsToDraw] = useState(12); // Standardwert auf 12 ändern
  const [deckCreatedMessage, setDeckCreatedMessage] = useState('');

  // Deck wird beim Laden der Seite erstellt
  useEffect(() => {
    const initializeDeck = async () => {
      const data = await deckOfCardsService.createNewDeck();
      setDeckId(data.deck_id);
      setDeckCreatedMessage('Kartendeck wurde erstellt!');
      
      // 12 Karten ziehen, sobald das Deck erstellt ist
      const drawData = await deckOfCardsService.drawCards(data.deck_id, 12);
      setCards(drawData.cards);

      // Nachricht nach 3 Sekunden ausblenden
      setTimeout(() => setDeckCreatedMessage(''), 3000);
    };

    initializeDeck();
  }, []); // Leerer Dependency-Array, damit dies nur einmal bei Page Load ausgeführt wird

  const drawCard = async () => {
    if (numCardsToDraw > 0) {
      const data = await deckOfCardsService.drawCards(deckId, numCardsToDraw);
      setCards(prevCards => [...prevCards, ...data.cards]);
    }
  };

  return (
    <div className={styles.centerContainer}>
      <h1 className={styles.title}>Fetchen von Poker Karten von einer API</h1>
      <div className={"container"}>
        <div className={`${styles.buttonContainer} mb-2`}>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>Neues Deck erstellen</button>
          {deckCreatedMessage && <span className={styles.message}>{deckCreatedMessage}</span>}
        </div>
        <div className={`${styles.buttonContainer} mb-5`}>
          <input
            type="number"
            value={numCardsToDraw}
            onChange={(e) => setNumCardsToDraw(parseInt(e.target.value))}
            min="1"
            className={`form-control ${styles.cardInput}`}
            style={{ width: '50px', marginRight: '10px' }}
          />
          <button className="btn btn-warning" onClick={drawCard} disabled={!deckId}>Karten ziehen</button>
        </div>
        <div className={styles.cardContainer}>
          {cards.map(card => (
            <img key={card.code} src={card.image} alt={card.code} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FetchApiPage;

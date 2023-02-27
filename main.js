/*
spades 0 - 12
hearts 13 - 25
clubs 26 - 38
diamonds 39 - 51
*/
var cards = [
  {
    id: 'cardP1',
    index: 0,
    hidden: true,
  },
  {
    id: 'cardP2',
    index: 1,
    hidden: true,
  },
  {
    id: 'cardP3',
    index: 2,
    hidden: true,
  },
  {
    id: 'cardP4',
    index: 3,
    hidden: true,
  },
  {
    id: 'cardP5',
    index: 4,
    hidden: true,
  },
  {
    id: 'cardP6',
    index: 5,
    hidden: true,
  },
  {
    id: 'cardP7',
    index: 6,
    hidden: true,
  },
  {
    id: 'cardP8',
    index: 7,
    hidden: true,
  },
  {
    id: 'cardP9',
    index: 8,
    hidden: true,
  },
  {
    id: 'cardP10',
    index: 9,
    hidden: true,
  },
  {
    id: 'cardP11',
    index: 10,
    hidden: true,
  },
  {
    id: 'cardP12',
    index: 11,
    hidden: true,
  },
  {
    id: 'cardP13',
    index: 12,
    hidden: true,
  },
  {
    id: 'cardT1',
    index: 0,
    hidden: true,
  },
  {
    id: 'cardT2',
    index: 1,
    hidden: true,
  },
  {
    id: 'cardT3',
    index: 2,
    hidden: true,
  },
  {
    id: 'cardT4',
    index: 3,
    hidden: true,
  },
  {
    id: 'cardT5',
    index: 4,
    hidden: true,
  },
  {
    id: 'cardT6',
    index: 5,
    hidden: true,
  },
  {
    id: 'cardT7',
    index: 6,
    hidden: true,
  },
  {
    id: 'cardT8',
    index: 7,
    hidden: true,
  },
  {
    id: 'cardT9',
    index: 8,
    hidden: true,
  },
  {
    id: 'cardT10',
    index: 9,
    hidden: true,
  },
  {
    id: 'cardT11',
    index: 10,
    hidden: true,
  },
  {
    id: 'cardT12',
    index: 11,
    hidden: true,
  },
  {
    id: 'cardT13',
    index: 12,
    hidden: true,
  },
  {
    id: 'cardH1',
    index: 13,
    hidden: true,
  },
  {
    id: 'cardH2',
    index: 14,
    hidden: true,
  },
  {
    id: 'cardH3',
    index: 15,
    hidden: true,
  },
  {
    id: 'cardH4',
    index: 16,
    hidden: true,
  },
  {
    id: 'cardH5',
    index: 17,
    hidden: true,
  },
  {
    id: 'cardH6',
    index: 18,
    hidden: true,
  },
  {
    id: 'cardH7',
    index: 19,
    hidden: true,
  },
  {
    id: 'cardH8',
    index: 20,
    hidden: true,
  },
  {
    id: 'cardH9',
    index: 21,
    hidden: true,
  },
  {
    id: 'cardH10',
    index: 22,
    hidden: true,
  },
  {
    id: 'cardH11',
    index: 23,
    hidden: true,
  },
  {
    id: 'cardH12',
    index: 24,
    hidden: true,
  },
  {
    id: 'cardH13',
    index: 25,
    hidden: true,
  },
  {
    id: 'cardR1',
    index: 13,
    hidden: true,
  },
  {
    id: 'cardR2',
    index: 14,
    hidden: true,
  },
  {
    id: 'cardR3',
    index: 15,
    hidden: true,
  },
  {
    id: 'cardR4',
    index: 16,
    hidden: true,
  },
  {
    id: 'cardR5',
    index: 17,
    hidden: true,
  },
  {
    id: 'cardR6',
    index: 18,
    hidden: true,
  },
  {
    id: 'cardR7',
    index: 19,
    hidden: true,
  },
  {
    id: 'cardR8',
    index: 20,
    hidden: true,
  },
  {
    id: 'cardR9',
    index: 21,
    hidden: true,
  },
  {
    id: 'cardR10',
    index: 22,
    hidden: true,
  },
  {
    id: 'cardR11',
    index: 23,
    hidden: true,
  },
  {
    id: 'cardR12',
    index: 24,
    hidden: true,
  },
  {
    id: 'cardR13',
    index: 25,
    hidden: true,
  },
];

const cardPiles = [
  {
    id: 'pile1',
    cards: [],
  },
  {
    id: 'pile2',
    cards: [],
  },
  {
    id: 'pile3',
    cards: [],
  },
  {
    id: 'pile4',
    cards: [],
  },
  {
    id: 'pile5',
    cards: [],
  },
  {
    id: 'pile6',
    cards: [],
  },
  {
    id: 'pile7',
    cards: [],
  },
];

//var chosenCard;
// var rndNum;
// var chooseCard = function() {
//     rndNum = Math.floor(Math.random() * cards.length);
//     const chosenCard = cards[rndNum];
//     return chosenCard;
// }

const initialDeal = function(){
	const cardsToDeal = [...cards];
	for (i = 0; i < 7; i++) {
		const numberOFCardsInPile = i + 1;
		for (j = 0; j < numberOFCardsInPile; j++) {
			const rndNum = Math.floor(Math.random() * cardsToDeal.length);
    		const chosenCard = cardsToDeal[rndNum];
        if ( j == i) {
          chosenCard.hidden = false;
        }
	    	cardPiles[i].cards.push(chosenCard.id);
	    	cardsToDeal.splice(rndNum, 1);
		}
	}
	return cardsToDeal;
}

const cardsLeftOverAfterDeal = initialDeal();


window.addEventListener('load', () => {
  drawCards(cardPiles);
});

function getCardById(cardId) {
  return cards[cards.findIndex((card) => card.id === cardId)];
}

function canDrop(cardId, cardPileId) {
  const cardPile =
    cardPiles[cardPiles.findIndex((cardPile) => cardPile.id === cardPileId)];

  const sourceCard = getCardById(cardId);
  

  // if the pile is empty then we can drop
  if (cardPile.cards.length === 0 ) {
    return (sourceCard.index === 12) || (sourceCard.index === 25);
  }

  const sourceCardSuit = Math.floor(sourceCard.index / 13);
  const sourceCardPosition = sourceCard.index - sourceCardSuit * 13;

  const destinationCard = getCardById(
    cardPile.cards[cardPile.cards.length - 1]
  );
  const destinationCardSuit = Math.floor(destinationCard.index / 13);
  const destinationCardPosition =
    destinationCard.index - destinationCardSuit * 13;

  // if destination position is 1 bigger than source position then we can drop
  const positionCompatible = destinationCardPosition - sourceCardPosition === 1;

  // if the difference between the suits is odd then we can drop
  const suitCompatible =
    Math.abs(destinationCardSuit - sourceCardSuit) % 2 === 1;

  return positionCompatible && suitCompatible;
}

function moveCard(cardId, destinationPileId) {
  // find the index of the pile where card came from
  const sourcePileIndex = cardPiles.findIndex(
    (cardPile) => cardPile.cards.indexOf(cardId) !== -1
  );
  // find the index of the pile where card has been dropped
  const destinationPileIndex = cardPiles.findIndex(
    (cardPile) => cardPile.id === destinationPileId
  );

  // get an array of card ids from the dropped card up to the end of the pile
  const cardSlice = cardPiles[sourcePileIndex].cards.slice(
    cardPiles[sourcePileIndex].cards.indexOf(cardId)
  );

  // remove this array from the pile where the card came from
  cardPiles[sourcePileIndex].cards = cardPiles[sourcePileIndex].cards.slice(
    0,
    cardPiles[sourcePileIndex].cards.indexOf(cardId)
  );

  // add this array to the pile where the card has been dropped
  cardPiles[destinationPileIndex].cards = [
    ...cardPiles[destinationPileIndex].cards,
    ...cardSlice,
  ];

  // setting top card to visible

  const topcardId = cardPiles[sourcePileIndex].cards[cardPiles[sourcePileIndex].cards.length - 1];
  const card = cards.filter(
    (card) => card.id === topcardId
    )
  if (card.length > 0) {
    card[0].hidden = false;
  }
  
  // check when no more hidden cards you win
 const hiddenCards = cards.filter(
  (card) => card.hidden == true
  )
 if (hiddenCards.length === 0) {
  alert('You won!')
 }
}

function drag(dragEvent) {
  dragEvent.dataTransfer.setData('text/plain', dragEvent.target.id);
}

function allowDrop(allowDropEvent) {
  allowDropEvent.preventDefault();
}

function drop(dropEvent) {
  dropEvent.preventDefault();
  const cardId = dropEvent.dataTransfer.getData('text/plain');
  // dropEvent.currentTarget gets us the id of the pile - i.e. where the actual drop event handler is
  const cardPileId = dropEvent.currentTarget.id;
  if (canDrop(cardId, cardPileId)) {
    moveCard(cardId, cardPileId);
  }
  // redraw the entire board every time
  drawCards(cardPiles);
}
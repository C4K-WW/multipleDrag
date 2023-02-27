  const STACKED_CARD_OFFSET = 50;

  // draws the whole board
  function drawCards(cardPiles) {
    const rowElement = createRowElement(cardPiles);
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = rowElement.outerHTML;
  }

  function createRowElement(cardPiles) {
    const rowElement = createDiv('card-row');
    cardPiles.forEach((cardPile) => {
      const pileElement = createCardPileElement(cardPile);
      rowElement.appendChild(pileElement);
    });
    return rowElement;
  }

  function createCardPileElement(cardPile) {
    const cardPileElement = createNewCardPileElement(cardPile.id);

    let currentAppendElement = cardPileElement;
    let offset = 0;
    for (let i = 0; i < cardPile.cards.length; i++) {
      const card = getCardById(cardPile.cards[i]);
      // wrap each section in a draggable div so that the html looks like this
      // draggable div
      //    card
      //    draggable div
      //        card
      //        draggable div
      //            card
      //
      // this enables you to drag cards with their children
      const draggableElement = createDraggableDiv(card.id, !card.hidden);
      const cardElement = createCardElement(card, offset);
      draggableElement.appendChild(cardElement);
      currentAppendElement.appendChild(draggableElement);
      currentAppendElement = draggableElement;
      offset += STACKED_CARD_OFFSET;
    }
    return cardPileElement;
  }

  function createDiv(className) {
    const el = document.createElement('div');
    if (className) {
      el.className = className;
    }
    return el;
  }

  function createDraggableDiv(id, canDrag) {
    const el = document.createElement('div');
    el.setAttribute('id', id);
    el.setAttribute('draggable', canDrag);
    el.setAttribute('ondragstart', 'drag(event)');
    return el;
  }

  function createCardElement(card, offset) {
    const el = document.createElement('img');
    // use the card id to load the image
    if (card.hidden) {
      el.setAttribute('src', `img/cardBack.png`);
    } else {
      el.setAttribute('src', `img/${card.id}.png`);
    }
    // make the cards not draggable - their parent div is the draggable thing
    el.setAttribute('draggable', false);
    // shift the card down by the right amount of offset
    el.style.top = `${offset}px`;
    el.className = 'card';
    return el;
  }

  function createNewCardPileElement(cardPileId) {
    const el = createDiv('card-outline');
    el.setAttribute('id', cardPileId);
    el.setAttribute('ondrop', 'drop(event)');
    el.setAttribute('ondragover', 'allowDrop(event)');
    return el;
  }

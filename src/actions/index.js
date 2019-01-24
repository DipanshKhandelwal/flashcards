import { fetchDecks, updateDeck, saveDeck } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const addDeck = (deck) => {
    return {
        type: ADD_DECK,
        deck
    }
}

export const removeDeck = (deck) => {
  return {
      type: REMOVE_DECK,
      deck
  }
}

export const handleReceiveDecks = () => {
    return (dispatch) => {
        return fetchDecks().then((decks) => {
            dispatch(receiveDecks(JSON.parse(decks)))
        })
    }
}

export const handleAddDeck = ({ title }) => {
    return (dispatch) => {
        return saveDeck(title).then((deck) => {
            dispatch(addDeck(deck))
        })
    }
}

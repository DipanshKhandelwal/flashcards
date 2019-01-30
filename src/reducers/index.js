import { ADD_DECK, REMOVE_DECK, RECEIVE_DECKS, ADD_CARD } from '../actions'

export default decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    case REMOVE_DECK:
      let newState = state
      newState[action.deck.id] = undefined
      delete newState[action.deck.id]
      return { ...newState }
    case ADD_CARD:
      let newStateAgain = state
      newStateAgain[action.deckId].cards = {
        ...newStateAgain[action.deckId].cards,
        [action.card.id]: action.card
      }
      return { ...newStateAgain }
    default:
      return state
  }
}
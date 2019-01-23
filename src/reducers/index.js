import { ADD_DECK, REMOVE_DECK, RECEIVE_DECKS } from '../actions'

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
        ...action.deck
      }
    case REMOVE_DECK:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}
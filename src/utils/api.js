import { AsyncStorage } from 'react-native'
import { getNewDeck } from './helpers'

FLASHCARDS_STORAGE_KEY = 'dipansh:flashcards'

export const fetchDecks = () => {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export const saveDeck = (title) => {
    let deck = getNewDeck(title)
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
    })).then(() => {
        return deck
    })
}

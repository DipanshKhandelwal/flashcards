import { AsyncStorage } from 'react-native'
import { getNewDeck } from './helpers'

FLASHCARDS_STORAGE_KEY = 'dipansh:flashcards'

export const fetchDecks = () => {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}
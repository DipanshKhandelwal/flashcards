import { AsyncStorage } from 'react-native'
import { getNewDeck, getNewCard } from './helpers'

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

export const deleteDeck = (id) => {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[id] = undefined
            delete data[id]
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
        })
}

export const saveCard = (question, answer, deckId) => {
    let card = getNewCard(question, answer)
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [deckId]: {
            cards: card
        } 
    })).then(() => {
        return card
    })
}
export function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function getNewDeck(title) {
  return {
    id: generateUID(),
    title: title,
    timestamp: Date.now(),
  }
}

export function getNewCard(question, answer) {
  return {
    id: generateUID(),
    question: question,
    answer: answer,
    timestamp: Date.now(),
  }
}
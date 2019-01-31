import React from 'react'
import { TouchableHighlight } from 'react-native'
import { ListItem, Card } from 'react-native-elements'

class DeckElement extends React.Component {
  render() {
    const { deck } = this.props

    console.log("wwwwwww", deck)

    return (
      <Card containerStyle={{ padding: 0 }} >
        <TouchableHighlight onPress={() => this.props.deckClicked(deck)} >
          <ListItem
            containerStyle={{ justifyContent: 'center' }}
            linearGradientProps={{
              colors: ['#10455bdd', '#2aa1af'],
              start: [.3, 0],
              end: [1, 0],
            }}
            badge={{
              value: deck.cards ? Object.keys(deck.cards).length : 0,
              badgeStyle: { backgroundColor: '#e2f0f1' },
              textStyle: { color: '#10455b', fontWeight: '800' }
            }}
            title={deck.title}
            titleStyle={{ color: 'white', fontWeight: '700', fontSize: 25 }}
            subtitleStyle={{ color: 'white' }}
            subtitle={Date(deck.timestamp).toLocaleString().slice(4, 15)}
            chevronColor="#e2f0f1"
            chevron
          />
        </TouchableHighlight>
      </Card>
    )
  }
}

export default DeckElement
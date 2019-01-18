import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import StatusBar from './src/components/StatusBar'
import DeckDetails from './src/components/DeckDetails'
import DeckList from './src/components/DeckList'
import CreateDeck from './src/components/CreateDeck'

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
    }
  },
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      style: {
        height: 50,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 3
        },
      },
    }
  }
)

const MainNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    },
    DeckDetails: {
      screen: DeckDetails,
      navigationOptions: {
        header: null
      }
    }
  })
)

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <StatusBar backgroundColor={'#ffffff'} basStyle='dark-content' />
        <MainNavigator />
      </View>
    );
  }
}

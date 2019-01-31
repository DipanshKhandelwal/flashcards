import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import StatusBar from './src/components/StatusBar'
import DeckDetails from './src/components/DeckDetails'
import DeckList from './src/components/DeckList'
import CreateDeck from './src/components/CreateDeck'
import CreateCard from './src/components/CreateCard'
import Quiz from './src/components/Quiz'
import middleware from './src/middleware'
import { Icon } from 'react-native-elements'

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: <Icon name='list-ul' type='font-awesome' color='#ffffff' />,
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: <Icon name='plus-circle' type='font-awesome' color='#ffffff' />,
    }
  },
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: '#e2f0f1'
      },
      style: {
        height: 50,
        backgroundColor: '#10455b',
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
    },
    CreateCard: {
      screen: CreateCard,
      navigationOptions: {
        header: null
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        header: null
      }
    }
  })
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)} >
        <View style={{ flex: 1 }} >
          <StatusBar backgroundColor={'#ffffff'} basStyle='dark-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native'

class Live extends Component {
  state = {
    coords: null,
    status: null,
    direction: ''
  }
  render() {
    const { coords, status, direction } = this.state;

    if (status === null) {
      return <ActivityIndicator style={{marginTop: 30}}  />
    }
    
    if (status === 'denied') {
      return <View><Text>Denied</Text></View>
    }

    if (status === 'undeterminded') {
      return <View><Text>undeterminded</Text></View>
    }

    return (
      <View>
        <Text>Live</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    )
  }
}

export default Live;
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { receiveEntries, addEntry } from '../actions';
import { connect } from 'react-redux'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'

class History extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchCalendarResults()
      .then(entries => dispatch(receiveEntries(entries)))
      .then(({entries}) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({ 
            [timeToString()]: getDailyReminderValue()
          }))
        }
      })
      .then(() => this.setState({ ready: true }))
  }
  
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

const mapStateToProps = (entries) => {
  return { entries };
}

export default connect(mapStateToProps)(History);
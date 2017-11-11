import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { receiveEntries, addEntry } from '../actions';
import { connect } from 'react-redux'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'
import UdaciFitnessCalendar from 'udacifitness-calendar'

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

  renderItem = ({ today, ...metrics }, formattedDate, key) => (
    <View>
      { today 
          ? <Text>{JSON.stringify(today)}</Text>
          : <Text>{JSON.stringify(metrics)}</Text>
      }
    </View>
  )

  renderEmptyDate = () => {
    return (
      <View>
        <Text>No Data for this day</Text>
      </View>
    ) 
  }
  
  render() {
    const { entries } = this.props;
    return (
      <UdaciFitnessCalendar 
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
    );
  }
}

const mapStateToProps = (entries) => {
  return { entries };
}

export default connect(mapStateToProps)(History);
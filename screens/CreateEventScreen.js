import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CreateEventScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Create event form should be here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

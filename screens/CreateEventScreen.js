import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class CreateEventScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Event',
    headerRight: () => (
      <Button
        title="OK"
        onPress={ () => {}}
      />
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextField label="Event" value="" />
          <TextField label="Place" value="" />
          <TextField label="Description" value="" multiline />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 24
  },
});

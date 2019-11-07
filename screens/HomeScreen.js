import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, StatusBar, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#142133" barStyle="light-content" />
        <View style={styles.header}>
          <Image source={require('../assets/onboarding-get-started.png')} style={styles.image} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Find a place to play</Text>
            <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
          <TouchableHighlight
            style={styles.brandButton}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text style={styles.brandButtonText}>Get Started</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    flex: 3,
    backgroundColor: '#142133',
    zIndex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    bottom: -24,
    zIndex: 1
  },
  content: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 48
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  paragraph: {
    color: '#666',
    fontSize: 16
  },
  brandButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 500,
    backgroundColor: "#EF4136",
    shadowOpacity: 0.45,
    shadowRadius: 5,
    shadowColor: '#FF6347',
    shadowOffset: { height: 5, width: 0 },
    alignSelf: 'flex-end'
  },
  brandButtonText: {
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#fff'
  }
});

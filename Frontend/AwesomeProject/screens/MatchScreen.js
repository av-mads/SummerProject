import React from 'react';
import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MatchScreen(match) {
  


  return (
      <View style={styles.container} >
        <Text>A match goes here</Text>
      </View>
    );
}

MatchScreen.navigationOptions = {
  title: 'Match',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
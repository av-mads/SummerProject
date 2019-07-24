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
import {BananaControl} from '../components/BananaControl'
import {MatchListItem} from '../components/MatchListItem'
import {HttpService} from '../components/HttpService'

export default function MyTestScreen() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
  return (
      <ImageBackground source={pic} style={styles.bgImage}>
        <View style={styles.container}>
          <BananaControl/>
          <Text>Help</Text>
          <MatchListItem/>
          
          <HttpService/>
        </View>
      </ImageBackground>
    );
}

MyTestScreen.navigationOptions = {
  title: 'Banana Control',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff9",
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});
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

import {HttpService} from '../components/Matches'

export default function MyTestScreen() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
  let team1 = {
        name: "team alpha",
        logo: require('../assets/images/Icon-ct-patch-small.png'),
  };
  let team2= {
      name: "team omega",
      logo: require('../assets/images/Icon-t-patch-small.png'),
  };

  return (
      <ImageBackground source={pic} style={styles.bgImage}>
        <View style={styles.container}>
          <BananaControl/>
          <Text>Help</Text>
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
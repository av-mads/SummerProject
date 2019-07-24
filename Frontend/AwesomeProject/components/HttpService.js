import React from 'react';

import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export class HttpService extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoaded: true
    };
  }

  componentDidMount(){
    fetch('https://api.pandascore.co/csgo/matches?token=PUbBYoQNl8UBcjZ0nvOHSPbJEGMEHtV75-437VksZ2bsKdNOb34')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={({id}, index) => String(id)}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => 
            (<View>
              <Text>{item.name}</Text>
              <Text>{item.status}</Text>
            </View>)
         }
        />
      </View>
    );
  }
}

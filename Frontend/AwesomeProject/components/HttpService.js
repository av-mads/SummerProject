import React from 'react';

import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

import { MatchListItem} from '../components/MatchListItem'
import HttpClient from '../services/HttpClient'

export class HttpService extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoaded: true
    };
  }

  componentDidMount(){

    new HttpClient().matches().then(response => this.setState({
      isLoaded: true,
      dataSource: response
    }));

    // fetch('https://api.pandascore.co/csgo/matches?token=PUbBYoQNl8UBcjZ0nvOHSPbJEGMEHtV75-437VksZ2bsKdNOb34')
    // .then((response) => response.json())
    // .then((responseJson) => {

    //   this.setState({
    //     isLoading: false,
    //     dataSource: responseJson,
    //   }, function(){

    //   });

    // })
    // .catch((error) =>{
    //   console.error(error);
    // });
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
      <View style={{flex: 1, paddingTop:20, width:"100%"}}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={({id}, index) => String(id)}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => 
            {
              if(item.opponents.length > 1){
                return (<MatchListItem team1={{ 
                  name: item.opponents[0].opponent.name, 
                  logo: {uri:item.opponents[0].opponent.image_url} 
                }} 
                
                team2={{ 
                  name: item.opponents[1].opponent.name, 
                  logo: {uri:item.opponents[1].opponent.image_url} 
                }} />)
              }
              else return (<View>
                <Text>{item.name}</Text>
                <Text>{item.status}</Text>
              </View>);
            }
         }
        />
      </View>
    );
  }
}

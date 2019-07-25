import React from 'react';

import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

import { MatchListItem} from '../components/MatchListItem'
import HttpClient from '../services/HttpClient'

export class HttpService extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount(){

    new HttpClient().matches().then(response => this.setState({
      isLoading: false,
      dataSource: response
    }));
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

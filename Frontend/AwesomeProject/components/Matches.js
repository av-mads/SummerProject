import React from 'react';

import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

import { MatchListItem} from './MatchListItem'
import HttpClient from '../services/HttpClient'

export class HttpService extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount(){
    var date = 'null';
    new HttpClient().matches().then(response => this.setState({
      isLoading: false,
      dataSource: response,
      date: 'null'
    }));
  }
  

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 2, padding: 20}}>
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
              if(this.date != item.begin_at.substring(0,10)){
                this.date = item.begin_at.substring(0,10);
                return (<Text>{item.begin_at.substring(0,10)}</Text>)
              }
              if(item.opponents.length > 1){
                return (<MatchListItem 
                  match={item}
                  team1={{ 
                    name: item.opponents[0].opponent.name, 
                    logo: {uri:item.opponents[0].opponent.image_url} 
                  }} 
                  
                  team2={{ 
                    name: item.opponents[1].opponent.name, 
                    logo: {uri:item.opponents[1].opponent.image_url} 
                  }} 
                  status={item.status}
                  result={item.status=="finished"&&item.winner!=null?"Winner is "+item.winner.name:""} />)
              }
              else if(item.opponents.length === 1){
                return (<MatchListItem
                  match={item}
                  team1={{ 
                    name: item.opponents[0].opponent.name, 
                    logo: {uri:item.opponents[0].opponent.image_url} 
                  }}
                  status={item.status}
                  result={item.status=="finished"&&item.winner!=null?"Winner is "+item.winner.name:""} />)
              }
              else return (<MatchListItem 
                match={item}
                league={item.league.name}
                matchType={item.match_type + " " + item.number_of_games}
                status={item.status} 
                result={item.status=="finished"&&item.winner!=null?"Winner is "+item.winner.name:""} />);
            }
         }
        />
      </View>
    );
  }
}

import React from 'react';

import { FlatList, SectionList, ActivityIndicator, Text, View  } from 'react-native';

import { MatchListItem} from './MatchListItem';
import HttpClient from '../services/HttpClient';

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

  // til brug med https://facebook.github.io/react-native/docs/sectionlist
  groupBy(data, keySelector){
    let grouping = new Map();
    data.forEach(match => {
      let key = keySelector(match);
      if(!grouping.has(key)){
        grouping.set(key, {title: key, data:[match]});
      } else {
        grouping.get(key).data.push(match);
      }
    });
    return Array.from(grouping.values());
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 2, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    if(this.state.dataSource.length == 0){
      return(
        <View style={{flex: 2, padding: 20}}>
          <Text>No upcoming matches</Text>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20, width:"100%"}}>
        <SectionList
          stickySectionHeadersEnabled={true}
          renderItem={({item, index, section}) => {
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
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold', textAlign:'center', backgroundColor:'#fff',borderColor:'#ddd',borderWidth:1}}>{title}</Text>
          )}
          sections={this.groupBy(this.state.dataSource, item => item.begin_at.substring(0,10))}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

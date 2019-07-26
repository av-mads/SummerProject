import React, { Component } from 'react';
import {
    Text,
    View, 
    StyleSheet,
    Image,
    TouchableNativeFeedback
} from 'react-native';

export class MatchListItem extends Component {
    componentDidMount(){
        
        
    }

    render(){
        return (
            <TouchableNativeFeedback onPress={()=>this.props.onPress(this.props.match)} >
                <View style={styles.container}>
                    <View style={styles.leftBackground}>
                        <Image source={this.props.team1.logo} style={styles.teamLogo}/>
                        <Text style={styles.teamName}>{this.props.team1.name}</Text>
                    </View>
                    <View/>
                    <View style={styles.nameContainer}>
                        <Text>{this.props.match.begin_at.substring(11,16)}</Text>
                        <Text>{this.props.match.name}</Text>
                        <Text>{this.props.match.league.name}</Text>
                        <Text>{this.props.match.number_of_games}</Text>
                    </View>
                    <View style={styles.rightBackground}>
                        <Image source={this.props.team2.logo} style={styles.teamLogo}/>
                        <Text style={styles.teamName}>{this.props.team2.name}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
            
        )
    }
}

MatchListItem.defaultProps = {
    team1: {
        logo: require('../assets/images/Icon-t-patch-small.png'),
        name: "TBD"
    },
    team2: {
        logo: require('../assets/images/Icon-ct-patch-small.png'),
        name: "TBD"
    },
    date: "now",
    time: "10:00",
    league: "ESL",
    matchType: "best of 3",
    status: "upcoming",
    result: "TBD",
    onPress: (item)=>console.debug("item was pressed: "+item.name),
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        borderColor: '#cacaca',
        borderBottomWidth: 1
    },
    leftBackground:{
        //backgroundColor: '#5d79ae',
        flex:3,
        paddingHorizontal:8,
    },
    rightBackground:{
        paddingHorizontal:8,
        flex:3,
        //backgroundColor:"#de9b35",
        alignItems:'center',
    },
    nameContainer:{
        flex:4, 
        flexDirection: "column", 
        alignItems:'center',
        borderStartWidth:1,
        borderEndWidth:1,
        borderStartColor:'#dddddd',
        borderEndColor:'#dddddd',
    },
    teamLogo:{
        width:52, 
        height:52, 
        margin:4,
        alignSelf: 'center',
    },
    teamName:{
        flex:1,
        textAlign:'center',
    },
    time:{
        flex:1,
        textAlign:'center',
        fontFamily:'roboto',
    }
});
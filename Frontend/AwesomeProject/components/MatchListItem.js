import React, { Component } from 'react';
import {
    Text,
    View, 
    StyleSheet,
    Image 
} from 'react-native';

export class MatchListItem extends Component {
    componentDidMount(){
        this.setState = { 
            team1: {
                name: "team alpha",
                logo: require('../assets/images/Icon-ct-patch-small.png'),
            },
            team2: {
                name: "team omega",
                logo: require('../assets/images/Icon-t-patch-small.png'),
            },
        };
    }

    state = { 
        team1: {
            name: "team alpha",
            logo: require('../assets/images/Icon-ct-patch-small.png'),
        },
        team2: {
            name: "team omega",
            logo: require('../assets/images/Icon-t-patch-small.png'),
        }
    };

    render(){
        return (
            <View style={styles.container}>
                <Image source={this.state.team1.logo} style={{width:52, height:52, backgroundColor:"#5d79ae"}}></Image>
                <View style={{flex:1, flexDirection: "column", alignItems:"stretch"}}>
                    <Text style={{textAlign:"left", backgroundColor:"#5d79ae"}}>{this.state.team1.name}</Text>
                    <Text style={{textAlign:"right", backgroundColor:"#de9b35"}}>{this.state.team2.name}</Text>
                </View>
                <Image source={this.state.team2.logo} style={{width:52, height:52, backgroundColor:"#5d79ae"}}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection:"row", 
        height: 52,

    },
    teamOne:{
        textAlign:"right", backgroundColor:"#de9b35"
    },
    teamTwo:{
        textAlign:"left", backgroundColor:"#5d79ae"
    }
});
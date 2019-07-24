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
                <View style={styles.leftBackground}>
                    <Image source={this.state.team1.logo} style={styles.teamLogo}/>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.teamOne}>{this.state.team1.name}</Text>
                    <Text style={styles.teamTwo}>{this.state.team2.name}</Text>
                </View>
                <View style={styles.rightBackground}>
                    <Image source={this.state.team2.logo} style={styles.teamLogo}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row", 
        justifyContent: "center",
        backgroundColor: '#de9b35',
    },
    leftBackground:{
        backgroundColor: '#5d79ae',
        paddingRight:16,
    },
    rightBackground:{
        paddingLeft:16,
    },
    nameContainer:{
        flex:1, 
        flexDirection: "column", 
        alignItems:'stretch',
        marginHorizontal:-16,
    },
    teamLogo:{
        width:52, 
        height:52, 
        margin:4,
    },
    teamOne:{
        flex:1,
        textAlign:"right",
        textAlignVertical:'center',
        backgroundColor:"#de9b35",
        borderBottomLeftRadius:12,
    },
    teamTwo:{
        flex:1,
        textAlign:"left",
        textAlignVertical:'center',
        backgroundColor:"#5d79ae",
        borderTopRightRadius:12,
    }
});
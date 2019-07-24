import React, { Component } from 'react';
import {
    Text,
    View, 
    StyleSheet,
    Image 
} from 'react-native';

export class MatchListItem extends Component {
    componentDidMount(){

        
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.leftBackground}>
                    <Image source={this.props.team2.logo} style={styles.teamLogo}/>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.teamOne}>{this.props.team1.name}</Text>
                    <Text style={styles.teamTwo}>{this.props.team2.name}</Text>
                </View>
                <View style={styles.rightBackground}>
                    <Image source={this.props.team1.logo} style={styles.teamLogo}/>
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
        borderColor: '#aaaaaa',
        borderBottomWidth: 1,
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
        paddingRight: 12,
    },
    teamTwo:{
        flex:1,
        textAlign:"left",
        textAlignVertical:'center',
        backgroundColor:"#5d79ae",
        borderTopRightRadius:12,
        paddingLeft: 12,
    }
});
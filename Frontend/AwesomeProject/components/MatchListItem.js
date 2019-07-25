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
                    <Image source={this.props.team1.logo} style={styles.teamLogo}/>
                    <Text style={styles.teamName}>{this.props.team1.name}</Text>
                </View>
                <View/>
                <View style={styles.nameContainer}>
                    <Text>Time:</Text>
                    <Text>League:</Text>
                    <Text>Match type:</Text>
                </View>
                <View style={styles.rightBackground}>
                    <Image source={this.props.team2.logo} style={styles.teamLogo}/>
                    <Text style={styles.teamName}>{this.props.team2.name}</Text>
                </View>
            </View>
        )
    }
}

MatchListItem.defaultProps = {
    team1: {
        logo: require('../assets/images/Icon-t-patch-small'),
        name: "Undetermined"
    },
    team2: {
        logo: require('../assets/images/Icon-ct-patch-small'),
        name: "Undetermined"
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop:10,
        backgroundColor:'#fff',
        borderColor: '#aaaaaa',
        borderBottomWidth: 1
    },
    leftBackground:{
        //backgroundColor: '#5d79ae',
        flex:1,
        paddingHorizontal:8,
    },
    rightBackground:{
        paddingHorizontal:8,
        flex:1,
        //backgroundColor:"#de9b35",
        alignItems:'flex-end',
        textAlign:'right'
    },
    nameContainer:{
        flex:4, 
        flexDirection: "column", 
        alignItems:'center',
        borderStartWidth:1,
        borderEndWidth:1,
        borderStartColor:'#dddddd',
        borderEndColor:'#777777',
    },
    teamLogo:{
        width:52, 
        height:52, 
        margin:4,
    },
    teamName:{
        flex:1,
    },
});
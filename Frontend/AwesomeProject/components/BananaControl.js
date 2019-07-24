import React, { Component } from 'react';
import {Text, View, ImageBackground } from 'react-native';

export class BananaControl extends Component {
    componentDidMount(){
        setInterval(() => {
            this.setState(previousState =>(
                { isUnderControl: !previousState.isUnderControl }
            ))
        }, 1000);
    }

    state = { isUnderControl: true };

    render(){
        if(!this.state.isUnderControl){
            return (
                <Text style={{fontSize:40}}>No control of 🍌!</Text>
            )
        } else {
            return (
                <Text style={{fontSize:40}}>🍌 under control!</Text>
            )
        }
    }
}
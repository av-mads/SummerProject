import React from 'react';

export class WhatIsRequired extends React.Component {

    testValue: "hiere";

    async method(){
        var response = await fetch("http://google.com");
        return "rense";
    }
}
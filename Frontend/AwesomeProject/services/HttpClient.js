import React from 'react';


export default class HttpClient {
    async matches() {
        var response = await fetch('https://api.pandascore.co/csgo/matches/upcoming?token=PUbBYoQNl8UBcjZ0nvOHSPbJEGMEHtV75-437VksZ2bsKdNOb34')
        const responseJson = await response.json();
        
        return responseJson;
    }
}

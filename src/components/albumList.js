// Imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Class
class AlbumList extends Component {
    //State variables
    state = { albums: [] };

    //State handling, initialization
    componentWillMount() {
        //Async HTTP Request to get albums from the API
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    //Render the fetched data

    //Render the component
    render() {
        console.log(this.state);

        return (
            <View>
                <Text>Album List!</Text>
            </View >
        );
    }
}

// Export component to the rest of the application
export default AlbumList;

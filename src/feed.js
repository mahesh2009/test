import database from "../../server/database.js"
import React, { Component } from 'react';

class App extends Component {
    state = {
        protests: []
      }
    componentDidMount(){
        fetch('https://quiet-sea-35786.herokuapp.com/get_protests?page=1')
            .then(response => response.json())
            .then(data => {
                this.setState({contacts:data})
                console.log(data)
            })
        .catch(console.log)
    }
}

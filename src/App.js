import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import ToggleRegions from './components/ToggleRegions'

export default class App extends Component { 

    state = { 
        fetchedChartData: []
    }
     
    async componentDidMount() { 
        return await axios.get("https://1c3e10hfy8.execute-api.eu-west-1.amazonaws.com/staging/ModelRSalesEvolution")
        .then(resp => this.setState({fetchedChartData: resp.data}))
        .catch(err => console.log(err))
    }

    render() { 
        const fetchedChartData = this.state.fetchedChartData

        return (
            <ToggleRegions 
            fetchedChartData={fetchedChartData}
            />
        )
    }
}
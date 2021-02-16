import React, { Component } from 'react'
import _ from 'lodash'

import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import Chart from './Chart'
import './ToggleRegions.css'

export default class ToggleRegions extends Component { 

    state = { 
        region: "EMEA",
    }

    handleRegionChange = e => {
        this.setState({ region: e.target.textContent }) ;
      };


    COStatus = data => {
        const COData = data.filter(obj => obj.COStatus === "CO")
        const weekIds = _.sortBy(COData, [(obj) => parseInt(obj.WeekID)])

        const COSales = weekIds.map(item => parseFloat(item.SalesValue))
        return COSales
    }       
        

    seasonalStatus = data => { 
        // const year2020 = data.filter(obj => obj.Month.split(" ")[1] !== "2021") 
        const seasonalData = data.filter(obj => obj.COStatus === "seasonal")
        const weekIds = _.sortBy(seasonalData, [(obj) => parseInt(obj.WeekID)])
        console.log(weekIds)

        const seasonalSales = weekIds.map(item => parseFloat(item.SalesValue))
        console.log(seasonalSales)
        return seasonalSales
    }

    // getWeeks = data => { 
    //     console.log(data)
    //     const newCopyData = {...data}
    //     const weekIds = _.sortBy(newCopyData, [(obj) => parseInt(obj.WeekID)])
    //     const uniqueWeeks = _.uniqBy(weekIds, "WeekID") 
    //     const firstMonths = _.uniqBy(uniqueWeeks, 'Month')

    //     //     const filteredWeeks = uniqueWeeks.map(firstObj => !firstMonths.some(secondObj => firstObj.WeekID === secondObj.WeekID))

    //     //    const chartWeekData = uniqueWeeks.map(obj => { 
    //     //        uniqueWeeks.filter(obj.WeekID !== obj.WeekID) 
    //     //    } 
    //     //    return chartWeekData

    // }

    render() { 
        const { region } = this.state 
        const { fetchedChartData }  = this.props
        const regionData = fetchedChartData.filter(obj => obj.RegionReOrder === region) 

        // const CO = this.COStatus(regionData) 
        // const seasonal = this.seasonalStatus(regionData)
        // const weeks = this.getWeeks(regionData)

        return (
            <div>
                {/* {this.getWeeks(regionData)} */}
                <div className="toggleGroup">
                    <ToggleButtonGroup
                    exclusive
                    onChange={this.handleRegionChange}
                    aria-label="text alignment"
                    >
                    <ToggleButton
                        value="left"
                        aria-label="left aligned"
                        className={
                        region === "EMEA"
                            ? "chosenButton"
                            : "nonchosenButton"
                        }
                    >
                    <div className="toggle-text">EMEA</div>
                    </ToggleButton>
            
                    <ToggleButton
                        value="center"
                        aria-label="centered"
                        className={
                        region === "Rest of ASIA"
                            ? "chosenButton"
                            : "nonchosenButton"
                        }
                    >
                    <div className="toggle-text">Rest of ASIA</div>
                    </ToggleButton>

                    <ToggleButton
                        value="right"
                        aria-label="centered"
                        className={
                        region === "USA"
                            ? "chosenButton"
                            : "nonchosenButton"
                        }
                    >
                    <div className="toggle-text">USA</div>
                    </ToggleButton>

                    <ToggleButton
                        value="right"
                        aria-label="centered"
                        className={
                        region === "China"
                            ? "chosenButton"
                            : "nonchosenButton"
                        }
                    >
                    <div className="toggle-text">China</div>
                    </ToggleButton>
                    <ToggleButton
                        value="right"
                        aria-label="centered"
                        className={
                        region === "E-Commerce"
                            ? "chosenButton"
                            : "nonchosenButton"
                        }
                    >
                    <div className="toggle-text">E-Commerce</div>
                    </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                        <div className="chart-data">
                               <Chart
                               key={regionData.RegionReOrder}
                               regionData={regionData}
                               COData={this.COStatus(regionData)}
                               seasonalData={this.seasonalStatus(regionData)}
                            //    weeklyData={this.getWeeks(regionData)}
                               />
                        </div> 
                </div>
        ) 
    }
}
       


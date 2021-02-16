import React, { Component } from 'react'
import _ from 'lodash'
import { Line } from 'react-chartjs-2'
import 'chartjs-plugin-lineheight-annotation'

export default class Chart extends Component { 

    state = { 
        chartData: {
            // labels: this.props.monthData,
            labels: ["February", "", "March", "", "", "", "April", "", "", "", "May", "", "", "", "June", "", "", "", "July", "", "", "", "August", "", "", "", "September", "", "", "", "October", "", "", "", "November", "", "", "", "December", "", "", "", "January", "", "", "", "February"],
            datasets: [
                {
                  label: 'CO Sales',
                  fill: false,
                  lineTension: 0.15,
                  backgroundColor: 'rgb(22, 43, 44, 1)',
                  borderColor: 'rgba(136, 34, 85, 1)', 
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(136, 34, 85, 1)', 
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(136, 34, 85, 1)', 
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.props.COData
                },
                {
                    label: 'Seasonal Sales',
                    fill: false,
                    lineTension: 0.15,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgb(221, 204, 119, 1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgb(221, 204, 119, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgb(221, 204, 119, 1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,    
                    type: 'line',
                    animationEasing: 'easeInOutBounce',
                    data: this.props.seasonalData
                  }
              ],
              
        }
    }

    render() { 
        return (
            <>
                {/* <div style={{position: "relative", textAlign: "center", width: 800, height: 750}}> */}
                      <Line options={{
                          responsive: true,
                        //   gridLines: { 
                        //       display: false
                        //   },
                          lineHeightAnnotation: {
                            always: false,
                            noDash: false 

                        } 
                    }}
                        data={this.state.chartData}
                    />
                {/* </div> */}
            </>
        )
    }
}
        // const weekIds = _.sortBy(COData, [(obj) => parseInt(obj.WeekID)])

        // componentDidMount() {
        //     const { datasets } = this.refs.chart.chartInstance.data
        //     console.log(datasets[0].data);
        //   }
        // }

        // getMonth = data => { 
        //     const year2020 = data.filter(obj => obj.Month.split(" ")[1] !== "2021") 
        //     const months = year2020.map(item => item.Month.split(" ")[0]) 
        //     const realMonths = _.uniq(months)
    
        //     var monthsArray = ["January", "February", "March", "April", "May", "June",
        //     "July", "August", "September", "October", "November", "December"];
    
        //     const sortedMonths = realMonths.sort((a, b) => {
        //         // sort based on the value in the monthNames object
        //         return monthsArray.indexOf(a) - monthsArray.indexOf(b);
        //       });
    
        //     return sortedMonths 
        // }


        // COStatus = data => {
        //     const year2020 = data.filter(obj => obj.Month.split(" ")[1] !== "2021") 
        //     const COData = year2020.filter(obj => obj.COStatus === "CO")

        //     let aggregateMonthlyCOSales = _.chain(COData)
        //     .sortBy([(obj) => parseInt(obj.WeekID)])
        //     .groupBy('Month')
        //     .map((objs, key) => { 
        //             return {
        //                 'Month': key,
        //                 'SalesValue': _.meanBy(objs, item => Number(item.SalesValue))
        //             }})
        //     .value()

        //     const COSales = aggregateMonthlyCOSales.map(item => item.SalesValue)
        //     return COSales 
        // }

                // const filteredMonths = _.difference(uniqueWeeks, firstMonths);

        // const notIncluded = weekIds.map(obj => obj.WeekID !== firstMonths.map(obj.WeekID))

        // if (uniqueWeeks.filter(firstObj => !firstMonths.some(secondObj => firstObj.WeekID === secondObj.WeekID))) { 
        //     const = uniqueWeeks.map(obj => obj.WeekID = "")
        // }

        // if (uniqueWeeks.map(firstObj => !firstMonths.some(secondObj => firstObj.WeekID === secondObj.WeekID))

        //     const filteredWeeks = uniqueWeeks.filter(firstObj => !firstMonths.some(secondObj => firstObj.WeekID === secondObj.WeekID))

        //     filteredWeeks.map()
        // }

        // let result = weekIds.filter(obj1 => !firstMonths.some(ob j2 => obj1.WeekID === obj2.WeekID));
        


        // const emptyMonthFields = filteredMonths.map(obj => obj.WeekID = "")

        // const chartMonthData = [...filteredMonths, ...firstMonths]



        // console.log(weekIds)
        // console.log(firstMonths)
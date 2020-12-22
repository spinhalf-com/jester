import React, {useEffect, useState} from 'react'
import {CChartLine} from '@coreui/react-chartjs'
import {getStyle, hexToRgba} from '@coreui/utils/src'
import _ from 'lodash'

const MainChart = (attributes) => {

    const [processedData, setProcessedData] = useState([])
    const [labels, setLabels] = useState([])
    const [yMax, setYMax] = useState(0)

    useEffect(() => {
        setProcessedData( attributes.datasets)
        setLabels(attributes.labels)
        setYMax(attributes.ymax)
    }, [attributes])

    const defaultOptions = (() => {
            return {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: yMax
                        },
                        gridLines: {
                            display: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 1,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3
                    }
                }
            }
        }
    )()

    const log = () => {
        console.log(processedData)
    }

    // render
    return (
        <CChartLine onMouseOver={() => log()}
            {...attributes}
            datasets={processedData}
            options={defaultOptions}
            labels={labels}
        />
    )
}


export default MainChart

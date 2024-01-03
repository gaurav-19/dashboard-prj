import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts'

const NetRevenue = () => {
    const [options, setOptions] = useState({
            chart: {
            //   height: 350,
              type: 'line',
              stacked: false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [2, 2, 4]
            },
            // title: {
            //   text: 'XYZ - Stock Analysis (2009 - 2016)',
            //   align: 'left',
            //   offsetX: 110
            // },
            xaxis: {
                categories: ['Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Current']
            },
            yaxis: [
              {
                seriesName: 'Net Revenue',
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#008FFB'
                },
                labels: {
                  style: {
                    colors: '#008FFB',
                  }
                },
                title: {
                  text: "(crores)",
                  style: {
                    color: '#008FFB',
                  }
                },
                tooltip: {
                  enabled: true
                }
              },
              {
                seriesName: 'Net Revenue',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#00E396'
                },
                labels: {
                  style: {
                    colors: '#00E396',
                  }
                },
                title: {
                  text: "(crores)",
                  style: {
                    color: '#00E396',
                  }
                },
              },
              {
                seriesName: 'Net Revenue',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#FEB019'
                },
                labels: {
                  style: {
                    colors: '#FEB019',
                  },
                },
                title: {
                  text: "(crores)",
                  style: {
                    color: '#FEB019',
                  }
                }
              },
            ],
            tooltip: {
              fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
              },
            },
            legend: {
              horizontalAlign: 'left',
              offsetX: 40
            }
          });
    
    const [series, setSeries] = useState([{
        name: 'From Operations',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8]
      }, {
        name: 'From Other Activities',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5]
      }, {
        name: 'Net Revenue',
        type: 'line',
        data: [2.5, 5, 5.6, 5.5, 6.6, 7.7, 10.3]
      }]);

    return (
      <div className="col-md-5 col-sm-10 d-flex flex-column m-2 bg-white shadow p-3 rounded">
        <div className='m-1'>
          <div className='fs-5 fw-bold'>Net Revenue</div>
          <div className='fs-6 text-muted'>16 Dec 2023</div>
          <div className='fs-3 fw-bold'>₹ 10.29 Cr</div>
        </div>
        <Chart
            className='img-fluid'
            options={options}
            series={series}
            type="bar"
            width="420"
        />
      </div>
    );
  }


export default NetRevenue;
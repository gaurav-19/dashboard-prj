import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts'

const NetProfit = () => {
    const [options, setOptions] = useState({
            chart: {
              height: 350,
              type: 'line',
              stacked: false
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              width: [2, 4,]
            },
            // title: {
            //   text: 'XYZ - Stock Analysis (2009 - 2016)',
            //   align: 'left',
            //   offsetX: 110
            // },
            xaxis: {
              categories: ['Apr', 'June', 'Sept', 'Dec'],
            },
            yaxis: [
              {
                seriesName: 'Quartartly Net Profit',
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
                seriesName: 'Quartartly Net Profit',
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
        name: 'Quartartly Net Profit',
        type: 'column',
        data: [6.2, 6, 5.8]
      }, {
        name: 'Net Cummulatibe Profit',
        type: 'line',
        data: [6.8, 7.9, 9.3]
      }]);

    return (
      <div className="col-md-5 col-sm-10 d-flex flex-column m-2 bg-white shadow p-3 rounded">
        <div className='m-1'>
        <div className='fs-5 fw-bold'>Net Profit</div>
          <div className='fs-6 text-muted'>16 Dec 2023</div>
          <div className='fs-3 fw-bold'>₹ 1.37 Cr</div>
        </div>
        <Chart
            className='image-fluid'
            options={options}
            series={series}
            type="bar"
            width="420"
        />
      </div>
    );
  }


export default NetProfit;
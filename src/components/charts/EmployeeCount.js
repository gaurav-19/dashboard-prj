import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts'

const EmployeeCount = () => {
    const [options, setOptions] = useState({
      labels: ['Male: 200', 'Female: 120'],
      colors: ['#546E7A', '#E91E63'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          // offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -100
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    });
    const [series, setSeries] = useState([200, 120]);

    return (
      <div className="col-md-5 col-sm-10 d-flex m-2 bg-white shadow p-3 rounded">
        <div className='m-1'>
          <div className='fs-5 fw-bold'>No of employees</div>
          <div className='fs-6 text-muted'>16 Dec 2023</div>
          <div className='fs-3 fw-bold'>302</div>
        </div>
        <Chart
            className='image-fluid'
            options={options} series={series} type="donut" width='380'/>
      </div>
    );
  }


export default EmployeeCount;
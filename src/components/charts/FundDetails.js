import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts'

const FundDetails = () => {
    const [options, setOptions] = useState({
        labels: ['Debt Fund: ₹ 24 Cr', 'Equity fund: ₹ 32 Cr'],
        colors: ['#2E93fA', '#FF9800'],
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
    const [series, setSeries] = useState([32, 24]);

    return (
        <div className="col-md-5 col-sm-10 d-flex flex-column m-2 bg-white shadow p-3">
        <div className='m-1'>
        <div className='fs-5 fw-bold'>Total fund raised</div>
          <div className='fs-6 text-muted'>16 Dec 2023</div>
          <div className='fs-3 fw-bold'>₹ 56 Cr</div>
        </div>
        <Chart 
            className='image-fluid'
            options={options} series={series} type="donut" width='400'/>
      </div>
    );
  }


export default FundDetails;
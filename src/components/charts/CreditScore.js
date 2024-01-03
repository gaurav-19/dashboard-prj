import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts'

const CreditScore = () => {
    const [options, setOptions] = useState({
      chart: {
        id: "area-bar",
        zoom: {
          enabled: false
        }
      },
      colors: ['#008000'],
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: ['March', 'June', 'September', 'December', 'Current']
      },
    });
    
    const [series, setSeries] = useState([
      {
        name: "Credit score",
        data: [770, 774, 761, 780, 789]
      }
    ]);

    return (
      <div className="col-md-5 col-sm-10 d-flex flex-column m-2 bg-white shadow p-3 rounded">
        <div className='m-1'>
          <div className='fs-5 fw-bold'>Credit score</div>
          <div className='fs-6 text-muted'>16 Dec 2023</div>
          <div className='d-flex align-items-baseline'>
          <div className='fs-2 fw-bold text-success'>789</div>
          <div className='fs-6'> / 900</div>
          </div>
          <div className='inner-bar'>
          <div className='bar' style={{width: '90%'}}></div>
          </div>
        </div>
        <Chart
            className='image-fluid'
            options={options}
            series={series}
            type="area"
            width="400"
        />
      </div>
    );
  }


export default CreditScore;
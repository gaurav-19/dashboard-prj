import React, { useState } from 'react';

const CurrentLoans = () => {
    const [loans, setLoans] = useState([
        {id:1, name:'Kotak Mahindra Bank', interest: 8.6, date: 'Jan, 2020', amount: 18.4},
        {id:2, name:'Bajaj Finace', interest: 12.3, date: 'Aug, 2019', amount: 2.3},
        {id:2, name:'NBFC Private Limited', interest: 11.2, date: 'July, 2019', amount: 3.8},
    ]);

    return (
      <div className="col-md-5 col-sm-10 d-flex flex-column m-2 bg-white shadow p-3 rounded">
        <div className='m-1'>
          <div className='fs-5 fw-bold'>Interest Coverage Ratio</div>
          <div className='fs-6 text-muted'>1 Dec 2023</div>
          <div className='fs-3 fw-bold'>8.3</div>
        </div>
        <div className='d-flex flex-column align-items-start justify-content-center'>
            { loans.map(val => <Card key={val.id} value={val}/>)}
       </div>
      </div>
    );
  }


export default CurrentLoans;


const Card = (props) => {
    const {value} = props;
    return( 
    <div className='col-10 d-flex p-2 align-items-center justify-content-center'>
        <div className='logo'>{value.name.charAt(0).toUpperCase()}</div>
        <div className='ps-3 pe-4'>
            <div className='fs-6 fw-bold'>{value.name}</div>
            <div className='fs-6 text-muted'><span className='fw-bold'>{value.interest}%</span> Rate of interest</div>
            <hr className='m-1 text-muted'/>
            <div className='fs-6 text-muted'>Since {value.date}</div>
        </div>
        <div className='fs-3 fw-bold'>{value.amount} cr</div>
  </div>)
}
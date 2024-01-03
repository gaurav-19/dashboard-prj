const ContactInfo = () => {

    return(
    <div className="row justify-content-center mt-5">
        <div className='col-md-5 col-10 rounded bg-light p-4'>
            <div className='my-4'>
                <p className="fw-bold fs-6 m-0">PS Finsec Private Limited</p>
                <a className="small m-0 text-muted" href="www.psfinsec.com">www.psfinsec.com</a>
            </div>
            <div className='my-4'>
                <p className="small m-0 text-muted"><spna className='fw-bold text-dark'>CIN:</spna> U4805UY489HF8FN0FJ84F20</p>
                <p className="small m-0 text-muted"><spna className='fw-bold text-dark'>PAN:</spna> PTRTR3928C</p>
                <p className="small m-0 text-muted"><spna className='fw-bold text-dark'>Date of Incorporation:</spna> 13 Feb 2018</p>
            </div>
            <div className='my-4'>
                <p className="small m-0 fw-bold">Add:</p>
                <p className="small m-0 text-muted">67, Netaji Subash Place</p>
                <p className="small m-0 text-muted">New Delhi - 110083</p>
            </div>
            <div className='my-4'>
                <p className="small m-0 text-muted">finance@psfinsec.com</p>
                <p className="small m-0 text-muted">+91 001 2738382-88</p>
            </div>
        </div>
            <img className='img-fluid col-md-5 col-10 rounded bg-light p-5' style={{maxHeight:400,}} src={require('./../../assets/location.png')} />
    </div>)

}

export default ContactInfo;
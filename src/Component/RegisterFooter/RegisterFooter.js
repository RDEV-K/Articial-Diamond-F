import React from 'react'
import './RegisterFooter.css'
import SignupMark from '../../assets/Images/signup-mark.png';

export default function RegisterFooter() {
  return (
    <div className='signup-footer'>
        <div className="footer-background">
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-6 d-flex align-items-center footer-title p-3 mt-5">
                        <div className="display-4 me-3">Labnet</div>
                        <div className="h6 lead footer-description">Global Lab-grown diamond inventory</div>
                    </div>
                    <div className='col-lg-12 row my-3'>
                        <div className='col-lg-6 footer-contact'>
                            <a href='' className="col-lg-4 px-3">
                                About Us
                            </a>
                            <a href='' className="col-lg-4 px-3">
                                Contact Us
                            </a>
                        </div>
                        <div className='col-lg-6 text-end'>
                            <img src={SignupMark} alt="mark" style={{ height: '24px', width: '40%' }} />
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <div className='footer-date'> © 2024, Labnet. All rights reserved.</div>
                        <div className='footer-last px-3'>
                            <a href="#" className='mx-2'>Terms and conditions</a>
                            <a href="#" className='mx-2'>Privacy policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

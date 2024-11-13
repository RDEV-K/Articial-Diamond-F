import React from 'react'
import './RegisterHeader.css';


export default function RegisterHeader() {
  return (
    <header className="header">
        <div className="header-background">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6 d-flex align-items-center header-title p-3">
                        <div className="display-4 mx-3">Labnet</div>
                        <div className="h6 lead header-description">Global Lab-grown diamond inventory</div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-end px-5">
                        <a href="/need-help" className='header-help me-3'>Need help?</a>
                        <a href='/login' className="btn btn-outline-secondary me-5">Login</a>
                    </div>
                </div>
                <div className="text-center mt-5 signup-header">
                    Sign Up
                </div>
            </div>
        </div>
     </header>
  )
}

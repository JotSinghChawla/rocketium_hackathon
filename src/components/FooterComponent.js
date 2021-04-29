import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-8 offset-1 col-sm-7 justify-content-center">
                    <h1> <i>The BirdWatcher</i> </h1>
                </div>
                <div className="col-12 col-sm-3 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="mailto:jot.chawla.54.js@gmail.com"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/jot-singh-chawla-708846138/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 The BirdWatcher</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer

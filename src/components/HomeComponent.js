import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { Link } from "react-router-dom";
import Loading from './LoadingComponent'

const HomeComponent = () => {

    return (
            <div className=''>
                <Jumbotron className='m-4'>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>BirdWatcher</h1>
                                <p>We take inspiration from the World's best birds, and create
                                a unique fusion experience. Our Incredible species collection will amaze 
                                your vision senses! </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container row row-content">
                    <div className='col-12 col-md-6 '>
                        <h2>
                            Discover a new world of birding...
                        </h2>
                        <Link to='/birds'>
                            <Button color='primary'>
                                    <span className='fa fa-list fa-lg'></span> Check Birds
                            </Button>
                        </Link>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img className="img-fluid" src='https://cdn.download.ams.birds.cornell.edu/api/v1/asset/314036821' alt='BirdWatcher'  />
                    </div>

                </div>
            </div>
    )
}

export default HomeComponent

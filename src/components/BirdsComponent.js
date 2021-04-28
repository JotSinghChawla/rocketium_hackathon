import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom'
import Loading from "./LoadingComponent";


const BirdsComponent = ({ birds, birdsLoading, birdsErrMess }) => {
    
    const RenderList = ({ input }) => {
        return (
                <Media key={input._id} className='mt-4'>
                    <Media left middle className='pt-2'>
                        <Media object className='mr-4' src={input.image} height='350' width='450' alt={input.name} />
                    </Media>
                    <Media body>
                        <Media heading>
                            { input.species.name } 
                        </Media>
                        <p> Sighting Date: {new Date(input.sightingDate.toDate()).toUTCString()}</p>
                        <p> Last Location: {input.location} </p>
                        <p> Size: {input.species.size} | Weight: {input.species.weight} | Color: {input.species.color} </p>
                    </Media>
                </Media>       
        )
    }

    return (
        <div className="container">
             <div className="row">
                <Breadcrumb className='mt-2'>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Birds Species</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Birds Species</h3>
                    <hr />
                </div>                
            </div>

            {
                birdsLoading ? <Loading /> :  
                            <div className="row row-content">
                                <div className="col-12">
                                    <h2>Check out different species of Birds</h2>
                                </div>
                                <div className="col-12">
                                    <Media list className='p-0'>
                                        { birds.map( (bird) => <RenderList input={bird}/> )}
                                    </Media>
                                </div>
                            </div>
            }
        </div>
    )
}

export default BirdsComponent

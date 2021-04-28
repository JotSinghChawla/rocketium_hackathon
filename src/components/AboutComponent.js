import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'

const About = () => {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className='mt-2'>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-8">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Discover a new world of Birding...</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    Birdomania Book, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>More About us:</h2>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ex sed felis suscipit, eu consequat augue ornare. Nullam ligula odio, rutrum placerat erat vel, vehicula malesuada leo. Ut condimentum volutpat arcu et tempor. Integer venenatis nibh eu felis imperdiet, eu imperdiet leo porta. Donec egestas dui dui, a auctor dui vulputate nec. Vivamus ullamcorper, leo vitae ornare faucibus, orci nulla imperdiet dolor, in ornare lacus massa eu ex. Sed dapibus quam nec arcu porta, vitae placerat ex efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce lobortis magna ac condimentum aliquam. Nunc pulvinar varius tortor, non laoreet nunc auctor at. Duis tincidunt, ex elementum euismod ultrices, magna mi ultrices neque, quis ultrices elit orci ac massa. Proin luctus, dui nec blandit bibendum, ipsum massa posuere eros, quis congue enim lacus in diam. Nunc euismod purus eget turpis blandit, at scelerisque ante tempor. Suspendisse finibus convallis ipsum vel tincidunt.
                    </p>
                    <br />
                    <p>
                        Sed sagittis diam est, non fringilla tellus convallis eget. Sed quam turpis, posuere tempor hendrerit varius, gravida condimentum nibh. Quisque gravida volutpat nisl et imperdiet. Fusce quam lectus, gravida ut consectetur condimentum, convallis eu est. Etiam non leo eros. In suscipit, nisl eu imperdiet viverra, diam arcu porta est, ut tempor leo lectus nec ex. Phasellus aliquet tortor sed elementum imperdiet. Nullam accumsan ante eu massa suscipit, vel ultricies sem eleifend. Maecenas pharetra sem sit amet dapibus semper.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;    
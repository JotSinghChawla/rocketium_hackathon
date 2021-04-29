import React, { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from "./AboutComponent";
import Home from './HomeComponent'
import BirdsComponent from "./BirdsComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBirds, deleteBird } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
      birdsState: state.birdsState,
    }    
}

const mapDispatchToProps = (dispatch) => ({
  fetchBirds: () => { dispatch(fetchBirds() ) },
  deleteBird: birdId => { dispatch(deleteBird(birdId) ) }
})

class Main extends Component {
  
  componentDidMount() {
    this.props.fetchBirds()      // this function is called
  }

  render() {
    // Method to pass props in Home component
    const Birds = () => {
      return ( <BirdsComponent birds={ this.props.birdsState.birds }
                     birdsLoading={ this.props.birdsState.isLoading }
                     birdsErrMess={this.props.birdsState.errorMessage }
                     deleteBird={ this.props.deleteBird }
                /> )        
    }

    return (
      <div >
       <Header />
            <Switch location={this.props.location}>
              <Route path='/home' component={ () => <Home />  } />       
              <Route exact path='/aboutus' component={ () => <About /> } />
              <Route exact path='/birds' component={ Birds } />       
              <Redirect to='/home' />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

import {Route, Switch} from 'react-router-dom';
import App from './App';
import React from 'react';
import Layout from '/Components/AppLayout.js';
import MovieDetails from '/Components/MovieDetail';


class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textToBeFiltered: ''
        };
    }
    filterMovies = (filtertext) => {
        this.setState({textToBeFiltered: filtertext});
    }

    goToMovieDetail () {
        this.props.history.push("/movies/details");
    }
    render() {
        return (
            <Layout filtertext={(filtertext) => this.filterMovies(filtertext)}>
                <Switch>
                    <Route exact path="/"  render={(props) => (<App  filerText={this.state.textToBeFiltered} /> )} />
                    <Route exact path="/movies/details/:id"  component={MovieDetails} render={(props) => (<MovieDetails {...props} goToMovieDetail={() => this.goToMovieDetail()}  />)}   />
                </Switch>
            </Layout>
        )
    }
 
}

export default  Routes;
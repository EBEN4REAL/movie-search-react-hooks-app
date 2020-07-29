import React from 'react';
import  {useEffect} from 'react';
import {useState, useReducer} from 'react';
import config_options from '../../config';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";

let initialState = {
    movieDetails:  {},
    loading : false
}
const reducer = (state, action) => {
    switch(action.type) {
        case("Loading"):
            return {
                ...state,
                loading: true
            }
        case('Not Loading'):
            return {
                ...state,
                loading : false
            }
        case('Fetched_Movies'):
            return {
                ...state,
                movieDetails: action.payload
            }
    }
}

const MovieDetails = props => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=4a3b711b&i=${props.match.params.id}`) 
            .then(response => {
              return response.json();
            })
            .then(jsonResponse => {
              dispatch({
                  type: "Fetched_Movies",
                  payload: jsonResponse
              });
        });
    }, []);

    const {movieDetails, loading} = state; 

    return (
        <div style={{
            backgroundImage: `linear-gradient(rgb(47, 47, 47, 0.86), rgb(47, 47, 47, 0.86)), url('https://img.yts.mx/assets/images/movies/onward_2020/background.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '1px'
        }}>
        <div className="section_block" style={{padding: "48px"}}>
            <div className="movieDetailWrapper">
                <div className="col_div banner">
                    <div className="movie" style={{ marginTop:'0px'}}>
                        <div className={`movie_wrapper`} style={{height: '390px', width: '90%'}}>
                            <img
                                width="200"
                                alt={`The movie titled: 2008`}
                                src={!movieDetails.Poster ? DEFAULT_PLACEHOLDER_IMAGE  : movieDetails.Poster}
                                style={{height: '99.5%'}}
                            />
                        </div>
                    </div>
                    <div className="button_wrapper_movie_details" >
                        <button className="button success">
                        <i className="fa fa-download mr-2" aria-hidden="true" style={{color: '#428e21'}}></i>Download</button>
                    </div>
                </div>
                <div className="col_div main_content ">
                    <div className="details_main_content_wrapper">
                        <h2 className="text-white  movieDetailsHeader">{movieDetails.Title}</h2>
                        <h2 className="text-white mt-3 h3">{movieDetails.Year} <br />{movieDetails.Genre}</h2><br />
                        <em className="italics__text text-white mt-4">Available in: &nbsp; </em> 
                        <button  className="button transparent mr-2" >3D. BluRay</button>
                        <button  className="button transparent mr-2" >720p.BluRay</button>
                        <button  className="button transparent mr-2" >1080p.BluRay</button>
                        <button  className="button transparent" >2160p.BluRay</button> <br />
                        <button className="button transparent mt-3">
                        <i className="fa fa-download mr-2" aria-hidden="true" style={{color: '#428e21'}}></i>Download Subititles</button><br />
                        <div className="row mt-3">
                            <div className="col-md-2">
                            <i className="fa fa-heart" aria-hidden="true" style={{color:'#6ac045', width: '75px' }}></i>

                            </div>
                            <div className="col-md-4">
                                <span style={{fontSize:'1.15em', fontWeight: 700}} className="text-white">976</span> 
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2">
                            <i className="fa fa-pagelines" aria-hidden="true" style={{color:'#6ac045', width: '75px' }}></i>

                            </div>
                            <div className="col-md-4">
                                <span style={{fontSize:'1.15em', fontWeight: 700}} className="text-white">28% - Critics</span> 
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2">
                            <i className="fa fa-pagelines" aria-hidden="true" style={{color:'#6ac045', width: '75px' }}></i>

                            </div>
                            <div className="col-md-4">
                                <span style={{fontSize:'1.15em', fontWeight: 700}} className="text-white">{movieDetails.imdbRating} - IMDB
                                </span> 
                            </div>
                        </div>
                        <div className="vpn__wrapper mt-3">
                            <p className="text-white">Please enable your VPN when downloading torrents</p>
                            <p className="vpn__para">If you torrent without a VPN, your ISP can see that you're torrenting and may throttle your connection and get fined by legal action!</p>
                            <div className="mt-2 text-center" >
                                <button className="button success" style={{fontSize: '15px !important'}}>
                                    Get Express VPN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col_div small">
                    <h3 className="text-white similar_movies_header">Similar Movies</h3>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="movie" style={{ marginTop:'0px'}}>
                                <div className={`movie_wrapper`} style={{height: '178px', width: '92%'}}>
                                    <img
                                        width="200"
                                        alt={`The movie titled: 2008`}
                                        src={DEFAULT_PLACEHOLDER_IMAGE}
                                        style={{height: '99.5%'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;


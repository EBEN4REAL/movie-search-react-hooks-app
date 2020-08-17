import React from "react";
import {useState} from 'react';
import {withRouter} from 'react-router-dom';


const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = (props) => {
  const [onHover , setHoverState] = useState({});

  let classList = 'movie_wrapper';
  classList = onHover.state ? 'movie_wrapper_overlay' : 'movie_wrapper';
  const poster = props.movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.movie.Poster;
    return (
      <div className="movie" >
        <div className={`movie_wrapper ${onHover.state ? 'overlay_border overlay_linear_gradient' : null}`} onMouseEnter={() => setHoverState({state: true, movieId: props.movieId})} onMouseLeave={() => setHoverState({state: false, movieId: props.movieId})}>
          <img
            width="200"
            alt={`The movie titled: ${props.movie.Title}`}
            src={poster}
          />
         {onHover.state ? 
          (
            <div className="movie__overlay_content" onClick={() => props.history.push(`/movies/details/${props.movie.imdbID}`)}>
              <div>
                <p style={{textAlign: 'center', marginTop: '20px'}}> <i className="fa fa-star" aria-hidden="true" style={{color: '#6AC045', marginRight: '10px', fontSize:'1.35em'}}></i></p>
                <h2 style={{textAlign: 'center', marginTop: '10px'}}></h2> 
                <h3  style={{textAlign: 'center', marginTop: '40px'}}>{props.movie.Type}</h3>
              </div>
          </div>
          ) : 
          null
        }
        {onHover.state ? 
          (
            <div className="details_button__wrapper">
              <button href="https://yts.mx/" className="button success" onClick={() => props.history.push(`/movies/details/${props.movie.imdbID}`)}>View Details</button> 
            </div>
          )
          : null
        }
         
      </div>
        <h6 className="movie__title_tag">{props.movie.Title} <i class="fa fa-heart-o ml-2 pull-right" style={props.movie.liked ? {cursor: 'pointer', color: 'red'} : {cursor: 'pointer', color: 'white'}}  aria-hidden="true" onClick={() => props.like(props.movie.index)}></i> 
        <br />
          <span style={{color: "grey", fontSize: '16px', textAlign:'left'}}>({props.movie.Year})</span>
        </h6>
        
      </div>
    );
};


export default withRouter(Movie);
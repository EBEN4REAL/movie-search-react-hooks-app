import React, {useContext} from 'react';
import { MovieContext } from '../../contexts/MovieContext';

const Banner = (props) => {
      return (
      <div className="banner__section">
        <p className="App-intro">Download YTS YIFY movies: HD smallest size</p>
        <p className="" style={{color:"#ccc",fonSize: '.95em'}}>
        Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in  <br />excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
        </p>
        <p style={{color: '#428bca'}}>IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</p>
        <p style={{fontWeight: '700', marginTop: '20px'}}><i className="fa fa-star" aria-hidden="true" style={{color: '#6AC045', marginRight: '10px', fontSize:'1.15em'}}></i> Popular Downloads </p>
        <div className="divider"></div>
      </div>
    )
}

export default Banner;
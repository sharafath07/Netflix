import React, { useEffect , useState } from 'react';
import "./Banner.css";
import { API_KEY , imageUrl } from '../../constants/constants';
import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState();

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[getRandom(0,19)])
    })
  },[])

  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
        <div className='content'>
            <h1 className='title'>{movie? movie.title ? movie.title : movie.name : ''}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner

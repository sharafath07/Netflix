import React, { useEffect, useState } from 'react';
import './RowPost.css';
import { imageUrl } from '../../constants/constants';
import axios from '../../axios';                

function RowPost({title,  isSmall, url}) {

  const [movies, setmovies] = useState([]);

  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data.results);
      setmovies(response.data.results)
    })
  },[])

  return (
    <div className='row'>
      <h2 className="title">{title}</h2>
      <div className="posters">
        {movies.map((movie)=>{

          return (
            <img className={isSmall ? 'poster smallPoster': 'poster'} src={movie ? imageUrl + movie.poster_path: ''} alt="poster" />
          )
        })}         
      </div>
    </div>
  )
}

export default RowPost

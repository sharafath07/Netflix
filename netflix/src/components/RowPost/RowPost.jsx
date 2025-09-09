import React, { useEffect, useState } from 'react';
import './RowPost.css';
import Youtube from 'react-youtube';
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../axios';                

function RowPost({title,  isSmall, url}) {

  const [movies, setmovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data.results);
      setmovies(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  function handleMovie(id){
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0].key);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      }else{
        console.log("No video in the Backend");
      }
      
      return (
        <Youtube videoId={response.data.results[0].key} />
      )
    })
    

  }
  return (
    <div className='row'>
      <h2 className="title">{title}</h2>
      <div className="posters">
        {movies.map((movie)=>{

          return (
            <img onClick={()=>{handleMovie(movie.id)}} className={isSmall ? 'poster smallPoster': 'poster'} src={movie ? imageUrl + movie.poster_path: ''} alt="poster" />
          )
        })}         
      </div>
      { urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost

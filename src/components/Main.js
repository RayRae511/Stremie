import React, { useEffect, useState } from 'react'
import Requests from '../Requests'
import axios from 'axios'

const Main = () => {

   const [movies, setMovies] = useState([])
   const movie = movies[Math.floor(Math.random()* movies.length)]

   useEffect(() => {
    axios.get(Requests.requestPopular).then((response) =>{
        setMovies(response.data.results)
    })
   },[])
//console.log(movie)
 
   //shortens the description of the movie
   const truncateString = (str, num) => {
    if(str?.length > num){
        return str.slice(0, num) + "..."
    }else{
        return str;
    }
   }

  return (
    <div className='w-full h-[600px] text-orange-700'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
            <img 
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt='{movie?.title}'
            />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='my-4'>
                <button className='border text-orange-600  border-gray-300 py-2 px-5 rounded-xl hover:bg-orange-600 hover:text-black'>Play</button>
                <button className='border bg-orange-600 text-black border-gray-100 py-2 px-5 ml-4 rounded-xl hover:bg-black hover:text-orange-600'>Watch later</button>
            </div>
            <p className='text-orange-300 text-sm'>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-orange-300'>{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main
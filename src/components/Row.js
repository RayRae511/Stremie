import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie'

const Row = ({title, fetchURL, rowId}) => {

    const [movies, setMovies] = useState([])
    useEffect(()=> {
        axios.get(fetchURL).then((res)=> {
            setMovies(res.data.results)
        })
    },[fetchURL])
   //console.log(movies)


    const sliderLeft = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft -500;
    }
    const sliderRight = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft +500;
    }
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
        <MdChevronLeft className='bg-orange-500 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block scrollbar-hide' size={40} onClick={sliderLeft}/>
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id)=> {
                   return <Movie key={id} item={item}/>
                })}
            </div>
        <MdChevronRight className='bg-orange-500 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block scrollbar-hide' size={40} onClick={sliderRight}/>
       </div>
    </>
  )
}

export default Row
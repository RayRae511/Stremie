import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { onSnapshot } from 'firebase/firestore'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const SavedShows = () => {

    const [movies, setMovies] = useState([])
    const {user} = UserAuth()
    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    useEffect(() => {
        onSnapshot(doc(db, 'users',`${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email])

    const movieRef = doc(db, 'users',`${user?.email}`)
    const deleteShow = async (passedId) => {
        try {
            const result = movies.filter((item) => item.id !== passedId)
            await updateDoc(movieRef, {savedShows: result})
        }catch (err) {console.log(err)}
    }
  return (
    <>
        <h2 className='text-orange-400 font-bold md:text-x1 p-4'>My Shows</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft 
                onClick={slideLeft}
                className='bg-orange-300 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
            />
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item) => (
                    <div key={item.id} className='w-[200px] sm:w-[240px] md:w-[280px] inline-block cursor-pointer relative p-2'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title}/>
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-orange-400'>
                            <p className='white-space-normal text-xs md:'>{item?.title}</p>
                            <p onClick={()=> deleteShow(item.id)} className='absolute text-orange-400 top-4 right-4'><AiOutlineClose /></p>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight 
                onClick={slideRight}
                className='bg-orange-300 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
            />
        </div>
    </>
  )
}

export default SavedShows
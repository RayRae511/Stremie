import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' title='Trending' fetchURL={Requests.requestTrending}/>
        <Row rowId='2' title='Popular' fetchURL={Requests.requestPopular}/>
        <Row rowId='3' title='Upcoming' fetchURL={Requests.requestUpcoming}/>
        <Row rowId='4' title='Horror' fetchURL={Requests.requestHorror}/>
        <Row rowId='5' title='Top Rated' fetchURL={Requests.requestTopRated}/>
    </div>
  )
}

export default Home
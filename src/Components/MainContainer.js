import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackgroung from './VideoBackgroung'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);

  if (!movie) return;

  const {overview, id, title} = movie[4];

  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackgroung movieId={id}/>
    </div>
  )
}

export default MainContainer

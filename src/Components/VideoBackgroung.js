import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackgroung = ({movieId}) => {
      const trailerMovie = useSelector(store=>store.movie.trailerMovie)
  useMovieById(movieId);

  return (
   <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
        title="YouTube trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackgroung

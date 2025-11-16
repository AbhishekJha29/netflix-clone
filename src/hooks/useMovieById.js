import axios from "axios";
import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        console.log(res.data.results);

        const trailer = res.data.results.find(
          (item) => item.type === "Trailer"
        );

        dispatch(getTrailerMovie(trailer || res.data.results[0]));
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, [movieId]);   // 👈 FIXED
};

export default useMovieById;

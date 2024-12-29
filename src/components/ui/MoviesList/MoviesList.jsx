import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../MovieCard';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
    </>
  );
}

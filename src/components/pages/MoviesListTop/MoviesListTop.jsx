import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TOP_LISTS } from '../../../data';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';
import MoviesList from '../../ui/MoviesList';

export default function MoviesListTop() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const location = useLocation();

  const movieType = TOP_LISTS.find(el => el.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  });

  if (error) return <p>ERROR</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Stack
        flexDirection="row"
        sx={{ mt: 2, mb: 2 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button onClick={() => navigate(-1)}>Назад</Button>
        <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {movieType.title}
        </Typography>
      </Stack>
      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

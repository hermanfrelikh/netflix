import { Box, Rating, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <Stack margin="0 10px">
      <Link to={`/movie/${movie.kinopoiskId}`} className={styles.noUnderline}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu}
          className={styles.img}
        />
        <Typography width="200px" textAlign="center">
          {movie.nameRu ? movie.nameRu : movie.nameEn}
        </Typography>
      </Link>
      {movie.ratingKinopoisk ? (
        <Stack alignItems="center">
          <Tooltip title={`${movie.ratingKinopoisk / 2} / 5`}>
            <Box>
              <Rating
                name="half-rating-read"
                defaultValue={Math.round((movie.ratingKinopoisk / 2) * 2) / 2}
                precision={0.5}
                readOnly
              />
            </Box>
          </Tooltip>
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
}

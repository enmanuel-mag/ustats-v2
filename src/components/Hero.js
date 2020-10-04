import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
    padding: '1.5rem',
    textAlign: 'center',
  },
  textYt: {
    color: '#fff',
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h4" color="secondary">
        Obten información de tu Streaming de <b>Youtube</b>
      </Typography>
      <Typography variant="h6" color="secondary">
        Visualiza fácilmente temas frecuentes que escriben tus espectadores
      </Typography>
    </Container>
  );
};

export default Hero;

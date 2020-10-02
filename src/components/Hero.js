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
      <Typography variant="h5" color="secondary">
        Obten información de tu Streaming de{' '}
        <Typography variant="h5" display={'inline'} className={classes.textYt}>
          <b>Youtube</b>
        </Typography>
      </Typography>
      <Typography color="secondary">
        visualiza fácilmente temas frecuentes
      </Typography>
      <Typography color="secondary">que escriben tus espectadores</Typography>
    </Container>
  );
};

export default Hero;

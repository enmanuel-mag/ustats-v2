import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '3.5rem',
  },

  paper: {
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Container className={classes.container} maxWidth="xl">
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography gutterBottom variant="h6">
              ¿Qué es uStats?
            </Typography>
            <Typography variant="body1" color="textPrimary">
              uStats es una herramienta web que te permitirá monitorear todo lo
              que ocurre con tu transmisión en vivo de Youtube, desde algo tan
              simple como estadística generales de la transmisión, hasta poder
              conectar con tu comunidad conociendo los temas y preguntas
              frecuentes que vayan surgiendo en el chat.
            </Typography>
          </Grid>

          <Grid item>
            <Typography gutterBottom variant="h6">
              ¿Cómo usar uStats?
            </Typography>
            <Typography gutterBottom variant="body1" color="textPrimary">
              Para usar el servicio da clic en el botón <b>EMPEZAR</b>, inicia
              sensión con la cuenta de Youtube de tu Streaming ¡Y listo! Se te
              redigirirá a la siguiente página con información sobre tu
              Streaming.
            </Typography>

            <Typography gutterBottom variant="body1" color="textPrimary">
              En el dashboard podrás visualizar tu Streaming en la parte
              superior izquierda, en la parte superior derecha la cantidad de
              likes, dislikes en tiempo real, los temas y palabras más
              frecuentes en la parte inferior izquierda y por último, en la
              parte inferior izquierda los comentarios de tus espectadores
              agrupados en burbujas.
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              ¿Qué información me permite conocer uSats?
            </Typography>
            <Typography gutterBottom variant="body1" color="textPrimary">
              En el dashboard podrás visualizar tu Streaming , la cantidad de
              likes, dislikes en tiempo real, los temas y palabras más
              frecuentes y por último, los comentarios de tus espectadores
              agrupados en burbujas.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Info;

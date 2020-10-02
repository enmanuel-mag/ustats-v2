import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '3.5rem',
    textAlign: 'center',
  },
  paper: {
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
}));

const InputLink = () => {
  const classes = useStyles();
  const router = useRouter();

  const startAnalitics = () => {
    console.log('Empezando validación');
    router.push('/statistics');
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <Container className={classes.container} maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={6}
        >
          <Grid item xs={12} container>
            <TextField
              id="filled-basic"
              label="Link de su Streaming"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={startAnalitics}
              href="/stats"
            >
              Empezar
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography display={'inline'}>
              Por favor enviar un correo{' '}
              <Typography display={'inline'} color={'primary'}>
                ustats@support.com
              </Typography>
              <Typography>si algún problema aparece</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default InputLink;

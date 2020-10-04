import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '3.5rem',
    textAlign: 'center',
  },
  paper: {
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
  linearProgress: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    color: '#f44336',
    textDecoration: 'none !important',
  },
  btnStart: {
    width: '14rem',
    height: '4rem',
    fontSize: '1.5rem',
  },
}));

const InputLink = () => {
  const classes = useStyles();

  const history = useHistory();
  const [liveChatIdState, setLiveChatId] = useState(false);
  const [channelIdState, setChannelId] = useState(false);
  const [stats, setStats] = useState(false);
  const [open, setOpen] = useState(false);

  window.gapi.load('client:auth2', function () {
    window.gapi.auth2.init({
      client_id:
        '1096884508122-bmg6p19vqvsindhs7i8t0eu4ulna70pa.apps.googleusercontent.com',
    });
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log('Cerrando dialog');
    setOpen(false);
  };

  const authenticate = async () => {
    try {
      const au = await window.gapi.auth2
        .getAuthInstance()
        .signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly' });
      return au;
    } catch (error) {
      console.log(error);
    }
  };

  const loadClient = async () => {
    try {
      await window.gapi.client.setApiKey(
        'AIzaSyDmJ1bgVuGjNtpnljeceuTjIwI20gnT32Y'
      );
      const lc = await window.gapi.client.load(
        'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
      );
      return lc;
    } catch (error) {
      console.log(error);
    }
  };

  const getLiveChatAndChannelId = async () => {
    try {
      const glcid = await window.gapi.client.youtube.liveBroadcasts.list({
        part: ['snippet'],
        mine: true,
      });
      console.log(glcid);
      return {
        snippet: glcid.result.items[0].snippet,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const startAnalitics = async () => {
    console.log('Empezando validación');

    await authenticate();
    handleOpen();
    await loadClient();
    const { snippet } = await getLiveChatAndChannelId();
    handleClose();
    history.push('/statistics', { snippet });
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow timeout={850} ref={ref} {...props} />;
  });

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
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnStart}
              onClick={startAnalitics}
            >
              Empezar
            </Button>

            {open && (
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                disableBackdropClick
                disableEscapeKeyDown
                TransitionComponent={Transition}
              >
                <DialogTitle id="customized-dialog-title">
                  <b>Conectando con tu Streaming</b>
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    Estamos estableciendo conexión con tu streaming para
                    proceder a realizar anñalisis de los mensajes de su
                    audiencia.
                  </Typography>

                  <Typography gutterBottom>
                    Esto tomará un par de minutos, la página lo redigirirá
                    automaticamenta, <br />
                    por favor espere.
                  </Typography>
                </DialogContent>
                <div className={classes.linearProgress}>
                  <LinearProgress />
                </div>
              </Dialog>
            )}
          </Grid>

          <Grid item xs={12}>
            <Typography display={'inline'}>
              Por favor enviar un correo
            </Typography>
            <Typography display={'inline'} color="primary"></Typography>
            <Typography display={'inline'} color="primary">
              <a className={classes.link} href="mailto:ustats@support.com">
                <b> ustats@support.com</b>
              </a>
            </Typography>
            <Typography> si algún problema aparece</Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default InputLink;

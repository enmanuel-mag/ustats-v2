import React from 'react';

import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundImage:
      'linear-gradient(-225deg, #e64a4a 0%, #ff4242 50%, #ab1e1e 100%)',
    width: '100%',
    height: '24rem',
  },

  link: {
    color: 'hsla(0,0%,100%,.8)',
    textDecoration: 'none !important',
  },
}));

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div id="section-bg" className={classes.bgColor}>
        <AppBar className={classes.navBar} color="transparent" elevation={0}>
          <Toolbar>
            <Container>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item xs={2}>
                  <Typography variant="h5" color="secondary">
                    <b>uStats</b>
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-start"
                  spacing={3}
                  xs={10}
                >
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      <Link className={classes.link}>Inicio</Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      <Link className={classes.link}>Ayuda</Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      <Link className={classes.link}>Donaciones</Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      <Link className={classes.link}> Acerca de</Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>

        <Toolbar />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;

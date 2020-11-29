import React from "react";

import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const w = window;

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundImage:
      "linear-gradient(-225deg, #ab1e1e 0%, #ff4242 40%, #ff4242 60%, #ab1e1e 100%)",
    width: "100%",
    height: "24rem",
  },
  bgColor2: {
    backgroundImage: "#00000000",
    width: "100%",
    height: "24rem",
  },

  link: {
    color: "hsla(0,0%,100%,1)",
    textDecoration: "none !important",
  },
  navBar: {
    backgroundColor:
      "linear-gradient(-225deg, #ab1e1e 0%, #ff4242 40%, #ff4242 60%, #ab1e1e 100%)",
  },
  navBar2: {
    backgroundColor: "#00000000",
  },
}));

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div
        id="section-bg"
        className={
          w.location.href.includes("statistics")
            ? classes.bgColor2
            : classes.bgColor
        }
      >
        <ElevationScroll {...props}>
          <AppBar
            className={
              w.location.href.includes("statistics")
                ? classes.navBar
                : classes.navBar2
            }
            elevation={0}
          >
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
                      <Link to="/" className={classes.link}>
                        <b>uStats</b>
                      </Link>
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
                        <Link to="/" className={classes.link}>
                          Inicio
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" color="secondary">
                        <Link to="/" className={classes.link}>
                          Ayuda
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" color="secondary">
                        <Link to="/" className={classes.link}>
                          Donaciones
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" color="secondary">
                        <Link to="/" className={classes.link}>
                          {" "}
                          Acerca de
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;

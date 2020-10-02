import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Hero from '../components/Hero';
import InputLink from '../components/InputLink';
import Info from '../components/Info';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  policy: {
    padding: '2rem',
  },
  inter: {
    padding: '.5rem',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Layout>
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Hero />
            </Grid>
            <Grid item xs={12}>
              <InputLink />
            </Grid>
            <Grid item xs={12}>
              <Info />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.policy}>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.inter}
                >
                  Hecho con{' '}
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>{' '}
                  por BiTeam
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.inter}
                >
                  Este sitio no está de ninguna manera afiliado con Youtube
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
}

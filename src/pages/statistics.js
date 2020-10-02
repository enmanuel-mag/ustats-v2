import React from 'react';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import VideoPLayer from '../components/VideoPLayer';
import InfoStream from '../components/InfoStream';
import Analitics from '../components/Analitics';
import WorldCloud from '../components/WorldCloud';
import Layout from '../components/Layout';
import Bubble from '../components/Bubble';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '.5rem',
    paddingBottom: '1rem',
  },
  mainCont: {
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '15px',
  },
  maxSize: {
    height: '100%',
    width: '100%',
  },
  itemSec: {
    paddingTop: '15px',
  },
}));

const Statistics = () => {
  const classes = useStyles();
  const urlVideo = 'https://www.youtube.com/watch?v=C-o8pTi6vd8';
  const infoStream = {
    title: 'EXTREMO y TARDE TRANQUILA - 12 HORAS!',
    likes: 2900,
    spects: 12500,
    duration: Date.now(),
  };
  const words = [
    {
      name: 'told',
      weight: 64,
    },
    {
      name: 'mistake',
      weight: 11,
    },
    {
      name: 'thought',
      weight: 16,
    },
    {
      name: 'bad',
      weight: 17,
    },
    {
      name: 'correct',
      weight: 10,
    },
    {
      name: 'day',
      weight: 54,
    },
    {
      name: 'prescription',
      weight: 12,
    },
  ];

  const topics = [
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
    {
      main: 'Los nuevos Ryzen 5000 mejorarán sus latencias?',
      relation: [],
    },
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
    {
      main: 'Los nuevos Ryzen 5000 mejorarán sus latencias?',
      relation: [],
    },
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
  ];
  return (
    <div>
      <Layout>
        <div className={classes.mainCont}>
          <Grid
            className={classes.container}
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            spacing={2}
            id="holi"
          >
            <Grid item xs={5}>
              <VideoPLayer urlVideo={urlVideo} />
            </Grid>
            <Grid item xs={7}>
              <InfoStream infoStream={infoStream} />
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              xs={5}
            >
              <Grid item xs={12}>
                <Analitics topics={topics} className={classes.maxSize} />
              </Grid>
              <Grid item xs={12} className={classes.itemSec}>
                <WorldCloud words={words} />
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Bubble />
            </Grid>
          </Grid>
        </div>
      </Layout>
    </div>
  );
};

export default Statistics;

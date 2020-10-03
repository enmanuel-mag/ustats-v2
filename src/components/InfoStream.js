import { Box, Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { QueryBuilder, ThumbUpAlt, Visibility } from '@material-ui/icons/';
import { Skeleton } from '@material-ui/lab';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem',
  },
  maxSize: {
    height: '100%',
  },
  margin: {
    margin: 'auto',
  },
  paper: {
    height: '100%',
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
}));

const InfoStream = ({ infoStream, spects }) => {

  const classes = useStyles();







  return (
    <Grow in direction="up" timeout={750}>
      <Paper className={classes.paper} elevation={0}>
        <Container className={classes.container}>
          {infoStream ? (

            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="stretch"
              spacing={4}
              className={classes.maxSize}
            >
              <Grid item xs={12}>
                <Typography variant="h5">
                  <b>{infoStream.snippet.title}</b>
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={6}
              >
                <Statistics statistics={infoStream.statistics} classes={classes} />
              </Grid>
              <Grid item xs={12}>
                <SpectRealTime spects={spects} classes={classes} />
              </Grid>
            </Grid>

          ) : (
              <Box
                width="100%"
                style={{ paddingBottom: '1.5rem' }}
              >
                <Skeleton width="75%" >
                  <Typography variant="h4">.</Typography>
                </Skeleton>
                <Skeleton variant="rect" width="95%" height="100%">
                  <div style={{ paddingTop: '30%' }} />
                </Skeleton>
              </Box>
            )}
        </Container>
      </Paper>
    </Grow>
  );
};

function Statistics({ statistics, classes }) {
  const { commentCount, dislikeCount, likeCount, viewCount } = statistics;

  return (
    <>
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        xs={3}
      >
        <Grid item xs={2}>
          <Visibility color="primary" />
        </Grid>
        <Grid item xs={4}>
          <Typography display="inline" variant="h6">
            {' '}
            <b>{viewCount}</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        xs={3}
      >
        <Grid item xs={2}>
          <ThumbUpAlt color="primary" />
        </Grid>
        <Grid item xs={4}>
          <Typography display="inline" variant="h6">
            {' '}
            {likeCount}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        xs={3}
      >
        <Grid item xs={2}>
          <QueryBuilder color="primary" />
        </Grid>
        <Grid item xs={4}>
          <Typography display="inline" variant="h6">
            {' '}
            {commentCount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function SpectRealTime({ spects, classes }) {
  const data = [
    {
      time: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      time: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      time: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      time: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      time: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      time: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      time: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const xLabel = spects.map((e) => ('Texto'))





  const options = {
    chart: {
      type: 'areaspline'
    },
    colors: ['#f44336'],
    title: {
      text: 'Espectadores en tiempo real'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      categories: xLabel,
      visible: false

    },
    yAxis: {
      title: {
        text: 'Espectadores'
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [{
      name: 'Espectadores',
      data: spects
    }]
  }
  HighchartsExporting(Highcharts);
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >

      <Grid item xs={12}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Grid>
    </Grid>
  );
}

export default InfoStream;

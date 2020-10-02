import { Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { QueryBuilder, ThumbUpAlt, Visibility } from '@material-ui/icons/';
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

const InfoStream = ({ infoStream }) => {
  const { title, spects } = infoStream;
  const classes = useStyles();

  return (
    <Grow in direction="up" timeout={750}>
      <Paper className={classes.paper} elevation={0}>
        <Container className={classes.container}>
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
                <b>{title}</b>
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
              <Statistics infoStream={infoStream} classes={classes} />
            </Grid>
            <Grid item xs={12}>
              <SpectRealTime spects={spects} classes={classes} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Grow>
  );
};

function Statistics({ infoStream, classes }) {
  const { spects, likes, duration } = infoStream;

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
            <b>{spects}</b>
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
            {likes}
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
            {duration}
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

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography display="inline" variant="h6">
          <b>Espectadores en tiempo real</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ResponsiveContainer width={'99%'} height={150}>
          <AreaChart
            width={800}
            height={150}
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorCurve" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#d32f2f" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffcdd2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis hide />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#d32f2f"
              fillOpacity={1}
              fill="url(#colorCurve)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}

export default InfoStream;

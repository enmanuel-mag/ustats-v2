import React from 'react';
import Highcharts from 'highcharts';
import { makeStyles } from '@material-ui/core/styles';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Box, Container, Grow, Paper, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

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

const Bubble = ({ data }) => {
  const classes = useStyles();

  const options = {
    chart: {
      type: 'packedbubble',
      height: '100%',
    },
    title: {
      text: 'Cluster de los temas mas frecuentes',
    },
    tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>',
    },
    plotOptions: {
      packedbubble: {
        minSize: '5%',
        maxSize: '75%',
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          gravitationalConstant: 0.05,
          splitSeries: true,
          seriesInteraction: false,
          dragBetweenSeries: false,
          parentNodeLimit: true,
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          filter: {
            property: 'y',
            operator: '>',
            value: 250,
          },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal',
          },
        },
      },
    },
    series: data,
    enableSimulation: false,
  };

  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    require('highcharts/highcharts-more')(Highcharts);

    return (
      <Grow in direction="up" timeout={750}>
        <Paper className={classes.paper}>
          {data ? (
            <Container className={classes.container}>
              <figure className="highcharts-figure">
                <HighchartsReact highcharts={Highcharts} options={options} />
              </figure>
            </Container>
          ) : (
            <Box
              width="100%"
              alignContent="center"
              style={{ paddingBottom: '1.5rem' }}
            >
              <Skeleton
                width="50%"
                style={{ display: 'block', margin: 'auto' }}
              >
                <Typography variant="h3">.</Typography>
              </Skeleton>
              <Skeleton
                variant="rect"
                width="95%"
                height="100%"
                style={{ display: 'block', margin: 'auto' }}
              >
                <div style={{ paddingTop: '95%' }} />
              </Skeleton>
            </Box>
          )}
        </Paper>
      </Grow>
    );
  } else {
    return 'Cargando...';
  }
};

export default Bubble;

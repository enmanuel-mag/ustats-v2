import React from 'react';
import Highcharts from 'highcharts';
import { makeStyles } from '@material-ui/core/styles';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Container, Grow, Paper } from '@material-ui/core';

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

const Bubble = () => {
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
    series: [
      {
        name: 'Europe',
        data: [
          {
            name: 'Germany',
            value: 767.1,
          },

          {
            name: 'Romania',
            value: 78.3,
          },
          {
            name: 'United Kingdom',
            value: 415.4,
          },
          {
            name: 'Turkey',
            value: 353.2,
          },
          {
            name: 'Italy',
            value: 337.6,
          },
        ],
      },
      {
        name: 'Africa',
        data: [
          {
            name: 'Tunisia',
            value: 24.3,
          },
          {
            name: 'Angola',
            value: 25,
          },

          {
            name: 'Nigeria',
            value: 93.9,
          },
          {
            name: 'South Africa',
            value: 392.7,
          },
          {
            name: 'Egypt',
            value: 225.1,
          },
          {
            name: 'Algeria',
            value: 141.5,
          },
        ],
      },
      {
        name: 'Oceania',
        data: [
          {
            name: 'Australia',
            value: 409.4,
          },
          {
            name: 'New Zealand',
            value: 34.1,
          },
          {
            name: 'Papua New Guinea',
            value: 7.1,
          },
        ],
      },
      {
        name: 'North America',
        data: [
          {
            name: 'Cuba',
            value: 30.2,
          },
          {
            name: 'USA',
            value: 5334.5,
          },
          {
            name: 'Canada',
            value: 566,
          },
          {
            name: 'Mexico',
            value: 456.3,
          },
        ],
      },
      {
        name: 'South America',
        data: [
          {
            name: 'Colombia',
            value: 74.1,
          },
          {
            name: 'Brazil',
            value: 501.1,
          },
          {
            name: 'Argentina',
            value: 199,
          },
          {
            name: 'Venezuela',
            value: 195.2,
          },
        ],
      },
      {
        name: 'Asia',
        data: [
          {
            name: 'Taiwan',
            value: 276.7,
          },
          {
            name: 'Indonesia',
            value: 453,
          },
          {
            name: 'Saudi Arabia',
            value: 494.8,
          },
          {
            name: 'Japan',
            value: 1278.9,
          },
          {
            name: 'China',
            value: 10540.8,
          },
          {
            name: 'India',
            value: 2341.9,
          },
          {
            name: 'Russia',
            value: 1766.4,
          },
          {
            name: 'Iran',
            value: 618.2,
          },
          {
            name: 'Korea',
            value: 610.1,
          },
        ],
      },
    ],
  };

  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    require('highcharts/highcharts-more')(Highcharts);
    return (
      <Grow in direction="up" timeout={750}>
        <Paper className={classes.paper}>
          <Container className={classes.container}>
            <figure className="highcharts-figure">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </figure>
          </Container>
        </Paper>
      </Grow>
    );
  } else {
    return 'Cargando...';
  }
};

export default Bubble;

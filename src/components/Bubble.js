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
    series: DATA,
    enableSimulation: false,
  };

  console.log('HOLII')

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

const DATA = [{
  name: 'Son buenas las tarjetas RTX?',
  data: [
  {
      name: "Mejor una RTX 2060 o una 3050?",
      value: 204.7
  },
  {
      name: "Que tarjeta puedo comprar para jugar en 4K?",
      value: 240.6
  },
  {
      name: "Las nuebo RX de AMD son mejores que la RTX de NVIDA",
      value: 200.7
  },
  {
      name: "Que generacion de tajretas pueod comprar?",
      value: 240.4
  },
  {
      name: "ALguna tarjeta grafica para jugar Cyberpunk?",
      value: 240.7
  }
  ]
}, {
  name: 'Que buen juego hay actualmente?',
  data: [
  {
      name: "Juegos gratis?",
      value: 25
  },
  {
      name: "DOnde compras tus juegos?",
      value: 50.6
  },
  {
      name: "Mejor es comprar en Steam o en Origin?",
      value: 7.3
  },
  {
      name: "Algun lugar para ofertas en juegos?",
      value: 60.7
  }
  ]
}, {
  name: 'Que audífonos recominedas? Razer o Logtech?',
  data: [{
      name: "Donde puedo comprar auriculareS?",
      value: 7.6
  },
  {
      name: "De que marca son tus auriculares?",
      value: 8.4
  },
  {
      name: "Mejor comprar auriculares bluetooh o alámbricos?",
      value: 8.3
  },
  {
      name: "SOn buenos los audifonos bluetooh?",
      value: 10.2
  },
  ]

}]

function moviePropsAreEqual(prev, next) {
  console.log(prev.id === next.id)
  return prev.id === next.id;
}


export default React.memo(Bubble, moviePropsAreEqual);

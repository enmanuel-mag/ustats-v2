import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grow, Paper, Typography } from '@material-ui/core';
import Highcharts from 'highcharts';

import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem',
    height: '100%',
    width: '100%',
  },
  maxSize: {
    height: '100%',
    width: '100%',
  },
  wordCloud: {
    paddingBottom: '25px',
  },
  paper: {
    height: '100%',
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
  words: {
    textTransform: 'capitalize',
  },
}));

const WorldCloud = ({ words }) => {
  const classes = useStyles();

  const optionsFunc = (wordsT) => {

    return {
      series: [
        {
          type: 'wordcloud',
          data: wordsT,
          name: 'Frecuencia',
        },
      ],
      title: {
        text: null,
      },
    };
  };
  HighchartsExporting(Highcharts);
  require('highcharts/highcharts-more')(Highcharts);
  require('highcharts/modules/wordcloud')(Highcharts);

  if (typeof Highcharts === 'object') {
    return (
      <Grow in direction="up" timeout={750}>
        <Paper className={classes.paper}>
          {words ? (
            <Container className={classes.container}>
              <Typography variant="h5" className={classes.wordCloud}>
                <b>Palabras mas frecuentes</b>
              </Typography>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsFunc(words)}
              />
            </Container>
          ) : (
              <Box
                width="100%"
                alignContent="center"
                style={{
                  paddingTop: '1.5rem',
                  paddingLeft: '1.5rem',
                  paddingBottom: '1.5rem',
                }}
              >
                <Skeleton width="50%">
                  <Typography variant="h3">.</Typography>
                </Skeleton>
                <Skeleton variant="rect" width="95%" height="100%">
                  <div style={{ paddingTop: '60%' }} />
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

export default WorldCloud;

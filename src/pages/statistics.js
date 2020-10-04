import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import VideoPLayer from '../components/VideoPLayer';
import InfoStream from '../components/InfoStream';
import Analitics from '../components/Analitics';
import WorldCloud from '../components/WorldCloud';
import Layout from '../components/Layout';
import Bubble from '../components/Bubble';
import { Skeleton } from '@material-ui/lab';

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
  const location = useLocation();
  const { snippet } = location.state;


  const [infoStream, setInfoStream] = useState(null);
  const [spects, setSpects] = useState([])
  const listUrl = snippet.thumbnails.default.url.split('/')
  const videoId = listUrl[listUrl.length - 2]
  const [bubbleSt, setBubbleSt] = useState(null)
  const [wcSt, setWcSt] = useState(null)

  useEffect(() => {

    setInterval(() => {
      (async () => {
        try {
          console.log(videoId)
          const st = await window.gapi.client.youtube.videos.list({
            part: ['snippet,contentDetails,statistics'],
            id: [videoId],
          });
          setInfoStream(st.result.items[0])
          setSpects(p => ([...p, parseInt(st.result.items[0].statistics.likeCount)]))
          return st.result.items[0];
        } catch (error) {
          console.log(error);
        }
      })()
    }, 10000);
    console.log('Desde API DETAILS')
  }, []);

  useEffect(() => {

    (async () => {
      const response = await fetch('/consultas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ liveChatId: snippet.liveChatId })
      })
      console.log(response)
      const data = await response.json()
      console.log(data)
      const { bubble, wc } = data;

      setBubbleSt(bubble)
      setWcSt(wc)

    })()

    console.log(snippet)
  }, [])


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
            <Grid item xs={12} lg={5}>
              <VideoPLayer videoId={videoId} />
            </Grid>
            <Grid item xs={12} lg={7}>
              <InfoStream infoStream={infoStream} spects={spects} />
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              xs={12} lg={5}
            >
              <Grid item xs={12}>
                {bubbleSt ? (<Analitics topics={bubbleSt} className={classes.maxSize} />) :
                  (
                    <Box
                      width="100%"
                      style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
                    >
                      <Skeleton width="75%" style={{ marginLeft: '1.5rem' }}>
                        <Typography variant="h4">.</Typography>
                      </Skeleton>
                      <Skeleton width="40%" style={{ marginLeft: '1.5rem' }}>
                        <Typography variant="h5">.</Typography>
                      </Skeleton>

                      {[1, 2, 3, 4, 5, 6, 7].map((ind) => (
                        <Skeleton
                          key={ind}
                          width="80%"
                          style={{ marginTop: '1.25rem', marginLeft: '1.5rem' }}
                        >
                          <Typography variant="h5">.</Typography>
                        </Skeleton>
                      ))}
                    </Box>
                  )}
              </Grid>
              <Grid item xs={12} className={classes.itemSec}>
                {wcSt ? (<WorldCloud words={wcSt} />) : <Box
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
                </Box>}
              </Grid>
            </Grid>
            <Grid item xs={12} lg={7}>
              {bubbleSt ? (<Bubble data={bubbleSt} />) : <Box
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
              </Box>}
            </Grid>
          </Grid>
        </div>
      </Layout>
    </div>
  );
};

export default Statistics;

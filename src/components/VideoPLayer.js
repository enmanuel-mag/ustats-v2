import { Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
  },
}));

const VideoPLayer = (props) => {
  const { videoId } = props;
  const classes = useStyles();

  return (
    <Grow in direction="up" timeout={750}>
      <ReactPlayer
        className={classes.container}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        height="100%"
        width="auto"
      />
    </Grow>
  );
};

export default VideoPLayer;

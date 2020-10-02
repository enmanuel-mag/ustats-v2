import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '3.5rem',
  },

  paper: {
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Container className={classes.container} maxWidth="xl">
        <Grid container spacing={4} direction="column">
          <Grid item>
            <Typography variant="h6">¿Qué es uStats?</Typography>
            <Typography variant="body1" color="textPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              porttitor porttitor nibh, at consequat mi dignissim sed. Mauris
              dignissim elit augue, id pharetra odio malesuada eu. Sed vulputate
              leo sed augue finibus, at tempor sapien rhoncus. Vestibulum at
              viverra dui, nec facilisis felis. Donec molestie dictum lacus, sed
              pharetra leo hendrerit eu
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6">¿Como usar uStats?</Typography>
            <Typography variant="body1" color="textPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              porttitor porttitor nibh, at consequat mi dignissim sed. Mauris
              dignissim elit augue, id pharetra odio malesuada eu. Sed vulputate
              leo sed augue finibus, at tempor sapien rhoncus. Vestibulum at
              viverra dui, nec facilisis felis. Donec molestie dictum lacus, sed
              pharetra leo hendrerit eu Curabitur velit neque, varius nec
              sagittis id, vulputate id lectus. Curabitur tempus sem ut est
              malesuada placerat. Aliquam luctus, massa a lobortis gravida, elit
              leo lacinia massa, eget cursus orci eros aliquam massa. Quisque
              interdum erat quis vehicula elementum. Morbi a pellentesque odio.
              In laoreet, velit ac faucibus consectetur, urna risus accumsan
              dui, et elementum dui felis vel dolor. Donec nisi orci, faucibus
              quis eros et, aliquam rhoncus purus.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Info;

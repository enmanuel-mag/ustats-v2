import {
  Box,
  Container,
  Grid,
  Grow,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { QueryBuilder, ThumbUpAlt, Visibility } from "@material-ui/icons/";
import { Skeleton } from "@material-ui/lab";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import CommentIcon from "@material-ui/icons/Comment";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem",
  },
  maxSize: {
    height: "100%",
  },
  margin: {
    margin: "auto",
  },
  paper: {
    height: "100%",
    boxShadow:
      "0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important",
  },
}));

const InfoStream = ({ infoStream, spects }) => {
  const classes = useStyles();

  console.log(infoStream);

  console.log(spects);

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
                alignItems="center"
                spacing={6}
              >
                <Statistics
                  statistics={infoStream.statistics}
                  classes={classes}
                />
              </Grid>
              <Grid item xs={12}>
                {spects.length > 1 ? (
                  <SpectRealTime spects={spects} classes={classes} />
                ) : (
                  <Skeleton variant="rect" width="95%" height="100%">
                    <div style={{ paddingTop: "30%" }} />
                  </Skeleton>
                )}
              </Grid>
            </Grid>
          ) : (
            <Box width="100%" style={{ paddingBottom: "1.5rem" }}>
              <Skeleton width="75%">
                <Typography variant="h4">.</Typography>
              </Skeleton>
              <Skeleton variant="rect" width="95%" height="100%">
                <div style={{ paddingTop: "30%" }} />
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
        justify="center"
        alignItems="center"
        xs={6}
      >
        <Grid item xs={2}>
          <ThumbUpAlt color="primary" />
        </Grid>
        <Grid item xs={4}>
          <Typography display="inline" variant="h6">
            {" "}
            <b>{likeCount}</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        xs={6}
      >
        <Grid item xs={2}>
          <ThumbDownAltIcon color="primary" />
        </Grid>
        <Grid item xs={4}>
          <Typography display="inline" variant="h6">
            {" "}
            {dislikeCount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function SpectRealTime({ spects, classes }) {
  if (spects.length < 1) {
    spects.push(1);
    spects.push(1);
  }

  const xLabel = spects.map((e) => "Texto");

  const options2 = {
    chart: {
      type: "areaspline",
    },
    colors: ["#f44336"],
    title: {
      text: "Espectadores en tiempo real",
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
    },
    xAxis: {
      categories: xLabel,
      visible: false,
    },
    yAxis: {
      title: {
        text: "Cantidad de me espectadores",
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: "",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
    },
    series: [
      {
        name: "Espectadores",
        data: spects,
      },
    ],
  };

  const options = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: "Espectadores en tiempo real",
    },

    colors: ["#f44336"],

    series: [
      {
        name: "Espectadores",
        data: spects,
        type: "areaspline",
        threshold: null,
        tooltip: {
          valueDecimals: 0,
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "#f44336"],
            [1, "#f44336"],
          ],
        },
      },
    ],
  };

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

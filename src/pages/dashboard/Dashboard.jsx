import React from 'react';
import { Container, Grid } from '@mui/material';
import ChartComponent from '../../components/ChartComponent';

const details = {
  options: {
    bar: {
      horizontal: true,
    },
  },
  series: [
    {
      data: [
        {
          x: 'category A',
          y: 10,
        },
        {
          x: 'category B',
          y: 18,
        },
        {
          x: 'category C',
          y: 13,
        },
      ],
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <ChartComponent details={details} type="bar" />
          </Grid>
          <Grid item xs={4}>
            <ChartComponent details={details} type="line" />
          </Grid>
          <Grid item xs={4}>
            <ChartComponent details={details} type="area" />
          </Grid>
          <Grid item xs={4}>
            <ChartComponent details={details} type="line" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;

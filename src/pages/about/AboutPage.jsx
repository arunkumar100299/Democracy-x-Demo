import React from 'react';
import { Container, Grid } from '@mui/material';
import Card from '../../components/Card';

const cardItems = [
  {
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz-oYFLuuHoslUnTegYB3NuCWMdL5jFzwkA&usqp=CAU',
    title: 'title 1',
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
  },
  {
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz-oYFLuuHoslUnTegYB3NuCWMdL5jFzwkA&usqp=CAU',
    title: 'title 1',
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
  },
  {
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz-oYFLuuHoslUnTegYB3NuCWMdL5jFzwkA&usqp=CAU',
    title: 'title 1',
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
  },
  {
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz-oYFLuuHoslUnTegYB3NuCWMdL5jFzwkA&usqp=CAU',
    title: 'title 1',
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
  },
  {
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz-oYFLuuHoslUnTegYB3NuCWMdL5jFzwkA&usqp=CAU',
    title: 'title 1',
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
  },
  {
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz-oYFLuuHoslUnTegYB3NuCWMdL5jFzwkA&usqp=CAU',
    title: 'title 1',
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
  },
  {
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz-oYFLuuHoslUnTegYB3NuCWMdL5jFzwkA&usqp=CAU',
    title: 'title 1',
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
  },
];
const AboutPage = () => {
  return (
    <>
      <Container>
        <div
          style={{
            marginTop: '20px',
            textAlign: 'center',
            marginLeft: '10%',
            marginBottom: '20px',
          }}
        >
          <h1>About</h1>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cardItems.map((item, i) => {
              return (
                <Grid item xs={4}>
                  <Card
                    key={i}
                    path={item.path}
                    title={item.title}
                    content={item.content}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default AboutPage;

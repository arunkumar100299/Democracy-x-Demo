import React, { useState } from 'react';
import { Button, Container } from '@mui/material';

const ContactPage = () => {
  const [counter, setCounter] = useState(0);

  if (counter === 2) {
    throw new Error(' Something went wrong. Please try again later !');
  }

  return (
    <>
      <Container>
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
          <h1>Contact Page</h1>
          <p>{counter}</p>
          <Button onClick={() => setCounter(counter + 1)}>increment</Button>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;

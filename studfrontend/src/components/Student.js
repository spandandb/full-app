import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

export default function Student() {
  const paperStyle = { padding: '50px 30px', width: 600, margin: '20px auto' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <Container>
      <Paper elevation={4} style={paperStyle}>
        <h1 style={{ color: 'green', margin: '0px', padding: '5px' }}>
          Enter New Student data
        </h1>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '65ch' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Address'
            variant='outlined'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>
      </Paper>
    </Container>
  );
}
